<template>
  <div>
    <div class="text-old-neutral-600 rounded-2xl p-2 mt-3 min-h-screen">
      <SigleVerseCard :title="cardTitle" :verse="currentVerse" />
    </div>
    <div class="text-old-neutral-600 rounded-2xl p-2 mt-3 min-h-screen">
      <TabBibleFooter @submit-form="handleTabFormSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SigleVerseCard from "./SigleVerseCard.vue";

import type { Verse } from "~/types/types";
import type { FormSubmitEvent } from "@nuxt/ui";

const chapters = [
  {
    bookId: "",
    bookName: "",
    chapter: undefined,
    verse: undefined,
    text: "",
  },
];
const cardTitle = ref("");
const currentVerse = ref<Verse>({
  bookId: chapters[0]?.bookId || "",
  bookName: chapters[0]?.bookName || "",
  chapter: chapters[0]?.chapter || 0,
  verse: chapters[0]?.verse || 0,
  text: chapters[0]?.text || "",
});

const handleTabFormSubmit = async (event: any) => {
  console.log("Searching for:", event);

  try {
    // Format the query string for the API
    const query = `${event.book_name}+${event.chapter}:${event.verse}`;
    const response = await fetch(
      `https://bible-api.com/${encodeURIComponent(query)}?translation=almeida`,
    );

    if (!response.ok) {
      throw new Error("Versículo não encontrado");
    }

    const data = await response.json();

    // Extract chapter and verse numbers from the reference
    const reference = data.reference || "";
    cardTitle.value = reference;
    const [chapter, verse] = reference.match(/(\d+):(\d+)/) || [
      event.chapter,
      event.verse,
    ];

    currentVerse.value = {
      bookId: data.translation?.abbreviation || "ALM",
      bookName: event.book_name,
      chapter: chapter,
      verse: verse,
      text: data.text || "",
    };
  } catch (error) {
    console.error("Erro ao buscar versículo:", error);
    // Keep current verse or show error
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
