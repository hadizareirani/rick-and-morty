<script lang="ts" setup>
import type { ICharacter } from "~/types/character";

type Props = Pick<ICharacter, "name" | "status" | "species" | "image">;
defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-4 py-16 md:flex-row md:gap-12 md:items-center">
    <NuxtImg
      :src="image" 
      :alt="name"
      class="w-60 h-60 rounded-lg object-cover"
      loading="lazy"
      placeholder
    />
    <div class="flex flex-col gap-4  ">
      <h1 class="font-bold text-white text-3xl">{{ name }}</h1>
      <CharacterStatusLabel :status="status" :species="species" />
    </div>
  </div>
</template>

