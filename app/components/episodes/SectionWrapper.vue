<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { ICharacter } from '~/types/character';
import type { Episode } from '~/types/episode';
import Card from './Card.vue';

type Props = Pick<ICharacter, 'episode'>;
const props = defineProps<Props>();

const episodes = ref<Episode[] | null>(null);

onMounted(async () => {
  if (props.episode && props.episode.length > 0) {
    // Extract episode IDs from URLs
    const ids = props.episode
      .map((url) => url.split('/').pop())
      .filter(Boolean)
      .join(',');
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${ids}`);
      if (res.ok) {
        const data = await res.json();
        // API returns object for single, array for multiple
        episodes.value = Array.isArray(data) ? data : [data];
      } else {
        episodes.value = [];
      }
    } catch {
      episodes.value = [];
    }
  } else {
    episodes.value = [];
  }
});
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
      <Card
        v-for="episode in episodes"
        :key="episode.id"
        :episode="episode"
      />
      <Card v-if="episodes && episodes.length === 0" :episode="null" />
      <Card v-if="!episodes" :episode="null" />
    </div>
  </section>
</template>