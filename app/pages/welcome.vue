<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <UPageCard
      class="max-w-md w-full"
      :title="currentStep.title"
      :description="currentStep.description"
      icon="i-heroicons-book-open"
      variant="soft"
    >
      <template #footer>
        <div class="flex justify-between gap-2">
          <UButton
            v-if="currentStepIndex > 0"
            @click="prevStep"
            variant="outline"
          >
            Anterior
          </UButton>
          <UButton v-if="currentStepIndex < steps.length - 1" @click="nextStep">
            Próximo
          </UButton>
          <UButton v-else to="/" color="primary"> Começar </UButton>
        </div>
      </template>
    </UPageCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "welcome",
});

const steps = [
  {
    title: "Bem-vindo ao Bíblia Studio!",
    description:
      "O objetivo desse aplicativo é tornar sua experiência de leitura bíblica cada vez melhor.",
  },
  {
    title: "Explore Livros e Versículos",
    description:
      "Navegue pelos livros da Bíblia, capítulos e versículos de forma intuitiva e organizada.",
  },
  {
    title: "Personalize sua Leitura",
    description:
      "Salve seus versículos favoritos, faça anotações e acompanhe seu progresso de leitura.",
  },
  {
    title: "Pronto para Começar?",
    description:
      "Vamos mergulhar na Palavra de Deus juntos. Clique em 'Começar' para acessar o aplicativo.",
  },
];

const currentStepIndex = ref(0);

const currentStep = computed(() => steps[currentStepIndex.value]);

const nextStep = () => {
  if (currentStepIndex.value < steps.length - 1) {
    currentStepIndex.value++;
  }
};

const prevStep = () => {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--;
  }
};
</script>
