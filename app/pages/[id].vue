<script lang="ts" setup>
const route = useRoute();
const { fetchOne } = useCharacter();

const characterId = parseInt(
  (Array.isArray(route.params.id) ? route.params.id[0] : route.params.id) || "",
);

if (!characterId || isNaN(characterId)) {
  throw createError({
    statusCode: 404,
    statusMessage: "Character not found",
  });
}

const { data: character, error } = await fetchOne(characterId);

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode || 404,
    statusMessage: error.value.statusMessage || "Character not found",
  });
}
</script>

<template>
  <div>
    <AppHeader>
      <CharacterHeaderInfo
        :name="character!.name"
        :image="character!.image"
        :status="character!.status"
        :species="character!.species"
      />
    </AppHeader>

    <ContainerWrapper class="flex flex-col gap-6 py-16">
      <!-- <section class="flex flex-col gap-4">
        <CharacterSectionTitle>
          <template #icon>
            <IconEpisodes class="w-6 h-6 text-glow" />
          </template>
          <template #title>Episodes</template>
        </CharacterSectionTitle>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <CharacterInfoCard>
            <template #title>{{character?.location.name}}</template>
            <template #value>{{`Origin: ${character?.origin.name}`  }}</template>
          </CharacterInfoCard>
        </div>
      </section> -->
    <LocationSectionWrapper :location="character!.location" />
    </ContainerWrapper>
  </div>
</template>
