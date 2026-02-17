<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useEpisode } from '~/composables/useEpisode';
import { extractIdFromUrl } from '~/utils/extractIdFromUrl';
import type { Episode } from '~/types/episode';

const props = defineProps<{ episodeUrl: string }>();

const episodeData = ref<Episode | null>(null);

onMounted(async () => {
    if (props.episodeUrl) {
        const id = extractIdFromUrl(props.episodeUrl);
        if (id) {
            const data = await useEpisode(id);
            episodeData.value = data as Episode;
        }
    }
});
</script>
<template>
<div>
    <InfoCard v-if="episodeData">
        <template #title>{{ episodeData.name }}</template>
        <template #value>{{ episodeData.episode }}</template>
        <template #extra>{{ episodeData.air_date }}</template>
    </InfoCard>
    <InfoCard v-else>
        <template #title>Loading...</template>
        <template #value>Loading...</template>
        <template #extra>Loading...</template>
    </InfoCard>
</div>
</template>