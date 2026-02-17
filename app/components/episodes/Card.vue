<script lang="ts" setup>
import type { Episode } from '~/types/episode';

defineProps<{ episode: Episode | null }>();
</script>
<template>
<div>
    <InfoCard v-if="episode">
        <template #title>{{ episode.name }}</template>
        <template #value>{{ episode.episode }}</template>
        <template #extra>{{ episode.air_date }}</template>
    </InfoCard>
    <InfoCard v-else>
        <template #title>Loading...</template>
        <template #value>Loading...</template>
        <template #extra>Loading...</template>
    </InfoCard>
</div>
</template>