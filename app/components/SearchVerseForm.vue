<template>
  <UForm
    class="flex flex-col items-center gap-4"
    :schema="schema"
    :state="state"
    @submit="onSubmit"
    @error="onFormError"
  >
    <UFormField label="Livro" name="book_name" :error="false">
      <UInputMenu
        color="neutral"
        highlight
        v-model="state.book_name"
        value-key="value"
        :items="bookItems"
      />
    </UFormField>
    <div class="flex flex-row gap-2">
      <UFormField label="Capítulo" name="chapter" :error="false">
        <UInput
          color="neutral"
          highlight
          v-model.number="state.chapter"
          type="number"
          min="1"
        />
      </UFormField>

      <UFormField label="Versículo" name="verse" :error="false">
        <UInput
          color="neutral"
          highlight
          v-model.number="state.verse"
          type="number"
          min="1"
        />
      </UFormField>
    </div>

    <UButton type="submit"> Buscar </UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, FormErrorEvent } from "@nuxt/ui";

const emit = defineEmits(["submitForm"]);
const toast = useToast();

const schema = z.object({
  book_name: z.string().min(1, "Escolha um livro"),
  chapter: z.number().min(1, "Capítulo inválido"),
  verse: z.number().min(1, "Versículo inválido"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  book_name: undefined,
  chapter: undefined,
  verse: undefined,
});

const bookItems = [
  { label: "João", value: "João" },
  { label: "Gênesis", value: "Gênesis" },
  { label: "Êxodo", value: "Êxodo" },
];

// Função disparada quando o formulário é VÁLIDO
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Busca realizada",
    description: `Procurando por ${event.data.book_name} ${event.data.chapter}:${event.data.verse}`,
    color: "success",
  });
  emit("submitForm", event.data);
}

// Função disparada quando a validação do Zod FALHA
async function onFormError(event: FormErrorEvent) {
  // Pega apenas a primeira mensagem de erro para não poluir a tela
  const firstError = event.errors[0]?.message || "Verifique os campos";

  toast.add({
    title: "Erro na busca",
    description: "Verifique os campos de busca",
    color: "error", // ou "red" dependendo da sua config de cores
  });
}
</script>
