<script lang="ts" setup>
import type { ICharacter } from "~/types/character";

type Props = Pick<ICharacter, "status" | "species">;
defineProps<Props>();
</script>

<template>
  <div class="flex gap-2 items-center">
    <i
      :class="{
        'bg-alive': status === 'Alive',
        'bg-dead': status === 'Dead',
        'bg-gray-500': status === 'unknown',
      }"
      class="h-3 rounded-full w-3"
    />
    <span class="font-normal text-white text-sm">
      {{ status }} - {{ species }}
    </span>
  </div>
</template>

