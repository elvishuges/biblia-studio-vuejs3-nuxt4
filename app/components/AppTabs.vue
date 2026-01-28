<template>
  <UTabs
    :items="items"
    variant="link"
    class="fixed top-0 left-0 right-0 z-50 shadow-md"
  >
    <template #bible="{ item }">
      <div class="max-h-screen overflow-y-auto">
        <TabBible />
      </div>
    </template>

    <template #about="{ item }"> Sobre </template>
  </UTabs>
</template>

<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import TabBible from "./TabBible.vue";

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
