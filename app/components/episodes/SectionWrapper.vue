<script lang="ts" setup>
import type { ICharacter } from '~/types/character';
import Card from './Card.vue';

type Props = Pick<ICharacter, 'episode'>;
const props = defineProps<Props>();


</script>
<template>
  <section class="flex flex-col gap-4">
    <SectionTitle>
      <template #icon>
        <IconEpisodes class="w-6 h-6 text-glow" />
      </template>
      <template #title>Episodes</template>
    </SectionTitle>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
     <Card v-for="episode in props.episode" :key="episode" :episode-url="episode" />
    </div>
  </section>
</template>