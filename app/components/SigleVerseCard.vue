<template>
  <UPageCard
    :title="`Versículo ${verse.bookName}`"
    :description="verse.text"
    icon="i-heroicons-book-open"
  />
</template>

<script setup lang="ts">
import type { Verse } from "~/types/types";

defineProps<{
  verse: Verse;
}>();
</script>
