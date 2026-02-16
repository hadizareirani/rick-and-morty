<script lang="ts" setup>
import type { ICharacter } from "~/types/character";

type Props = Pick<ICharacter, "name" | "image" | "status" | "species">;
defineProps<Props>();
</script>

<template>
  <div
    class="border border-transparent flex flex-col gap-4 p-4 rounded-2xl w-full hover:border-grayCard"
  >
    <div>
      <NuxtImg :src="image" :alt="name" class="w-full h-auto rounded-lg" />
    </div>
    <div class="flex flex-col gap-4">
      <h2 class="font-bold text-white text-xl">{{ name }}</h2>
      <CharacterStatusLabel :status="status" :species="species" />
    </div>
  </div>
</template>

