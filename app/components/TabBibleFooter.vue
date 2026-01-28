<script setup lang="ts">
const emit = defineEmits(["submitForm"]);
import type { NavigationMenuItem } from "@nuxt/ui";

// 1. Estado para controlar se o formulário aparece
const showForm = ref(false);

const items: NavigationMenuItem[] = [
  {
    label: "Buscar",
    icon: "i-heroicons-magnifying-glass",
    onSelect: () => {
      showForm.value = !showForm.value;
    },
  },
];

function handleSearchSubmit(paylod: any) {
  emit("submitForm", paylod);
  showForm.value = false;
}
</script>

<template>
  <footer class="fixed bottom-0 left-0 right-0">
    <div class="w-full">
      <div v-if="showForm" class="p-4 border-t">
        <SearchVerseForm @submit-form="handleSearchSubmit" />
      </div>

      <USeparator class="w-full" icon="i-heroicons-book-open" />

      <div class="flex justify-center items-center w-full py-2">
        <UNavigationMenu
          :items="items"
          class="flex justify-center items-center"
        />
      </div>
    </div>
  </footer>
</template>
