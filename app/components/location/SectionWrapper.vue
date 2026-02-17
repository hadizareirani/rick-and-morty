<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useLocation } from '~/composables/useLocation';
import { extractIdFromUrl } from '~/utils/extractIdFromUrl';
import type { Location } from '~/types/location';
import type { ICharacter } from '~/types/character';

type Props = Pick<ICharacter, 'location'>;
const props = defineProps<Props>();

const locationData = ref<Location | null>(null);

onMounted(async () => {
  if (props.location?.url) {
    const id = extractIdFromUrl(props.location.url);
    if (id) {
      locationData.value = await useLocation(id);
    }
  }
});
</script>
<template>
  <section class="flex flex-col gap-4">
    <SectionTitle>
      <template #icon>
        <IconLocation class="w-6 h-6 text-glow" />
      </template>
      <template #title>Location</template>
    </SectionTitle>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <InfoCard v-if="locationData">
        <template #title>{{ locationData.name }}</template>
        <template #value>{{ locationData.type }}</template>
        <template #extra>{{ locationData.dimension }}</template>
      </InfoCard>
      <InfoCard v-else>
        <template #title>{{ props.location.name }}</template>
        <template #value>Loading...</template>
        <template #extra>Loading...</template>
      </InfoCard>
    </div>
  </section>
</template>