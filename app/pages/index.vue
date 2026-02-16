<script setup lang="ts">
const { fetchAll } = useCharacter();
const { data: characters, pending } = await fetchAll();
</script>
<template>
  <div class="flex flex-col gap-16">
    <AppHeader>
      <SearchBar />
    </AppHeader>

    <ContainerWrapper>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <CharacterCard
          v-for="character in characters?.results"
          :key="character.id"
          :name="character.name"
          :image="character.image"
          :status="character.status"
          :species="character.species"
        />
      </div>
    </ContainerWrapper>
  </div>
</template>
