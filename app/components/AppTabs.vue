<template>
  <UTabs :items="items" variant="link" class="gap-4 w-full">
    <template #bible="{ item }">
      <div class="px-12">
        <Bible />
      </div>
    </template>

    <template #about="{ item }">
      <About />
    </template>
  </UTabs>
</template>

<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import Bible from "./Tabs/Bible.vue";

const items = [
  {
    label: "Sobre",
    slot: "about" as const,
  },
  {
    label: "Biblia",
    slot: "bible" as const,
  },
] satisfies TabsItem[];
</script>
