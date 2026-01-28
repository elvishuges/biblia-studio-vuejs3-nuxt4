<template>
  <div
    class="max-w-md mx-auto my-6 overflow-hidden bg-[#fdfaf3] border border-[#e2d1b3] rounded-sm shadow-lg ring-1 ring-[#c5a059]/30 transition-all hover:shadow-xl group"
  >
    <div
      class="bg-[#9b8c8c] px-4 py-2 flex items-center justify-between border-b-2 border-[#c5a059]"
    >
      <span
        class="text-[#fdfaf3] font-serif font-bold text-sm tracking-widest uppercase"
      >
        {{ title }}
      </span>
      <UIcon name="i-heroicons-book-open" class="text-[#c5a059] w-5 h-5" />
    </div>

    <div class="p-8 relative">
      <span
        class="absolute top-4 left-4 text-6xl text-[#e2d1b3] font-serif opacity-50 pointer-events-none"
        >“</span
      >

      <div class="relative z-10 text-center">
        <p
          class="text-[#2c2c2c] font-serif italic text-lg leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:text-[#8b0000] first-letter:mr-1 first-letter:float-left"
        >
          {{ verse.text }}
        </p>
      </div>

      <div class="mt-6 flex justify-center">
        <div
          class="h-px w-24 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent"
        ></div>
      </div>
    </div>

    <div class="bg-[#f4eee0] px-4 py-2 text-right">
      <span class="text-[#5a4632] font-serif text-xs font-semibold italic">
        Sagradas Escrituras
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Verse } from "~/types/types";

defineProps<{
  verse: Verse;
  title: string;
}>();
</script>

<style scoped>
/* Adiciona uma fonte serifada elegante se não estiver configurada globalmente */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,700;1,400&display=swap");

.font-serif {
  font-family: "Playfair Display", "Lora", serif;
}
</style>
