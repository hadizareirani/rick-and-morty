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

    <ContainerWrapper class="flex flex-col gap-16 py-16">
      <EpisodesSectionWrapper :episode="character!.episode"/>
      <LocationSectionWrapper :location="character!.location" />
    </ContainerWrapper>
  </div>
</template>
