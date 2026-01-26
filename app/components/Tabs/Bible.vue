<template>
  <div class="container bg-amber-50 text-old-neutral-600 rounded-3xl p-3">
    <SigleVerseCard :verse="currentVerse" />
  </div>
</template>

<script setup lang="ts">
import SigleVerseCard from "../SigleVerseCard.vue";

const chapters = [
  {
    bookId: "JHN",
    bookName: "João",
    chapter: 1,
    verse: 2,
    text: "\nFor God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.\n\n",
  },
];

const currentVerse = computed(() => ({
  bookId: chapters[0]?.bookId || "",
  bookName: chapters[0]?.bookName || "",
  chapter: chapters[0]?.chapter || 0,
  verse: chapters[0]?.verse || 0,
  text: chapters[0]?.text || "",
}));
</script>

<style scoped>
/* Additional styles if needed */
</style>
