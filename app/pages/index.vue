<script setup lang="ts">
const route = useRoute();
const { fetchAll } = useCharacter();

const page = computed(() => {
  const pageParam = route.query.page;
  return pageParam ? parseInt(pageParam as string) : 1;
});

const { data: characters } = await fetchAll({
  page: computed(() => page.value.toString()),
});
</script>

<template>
  <div class="flex flex-col">
    <AppHeader>
      <SearchBar />
    </AppHeader>

    <ContainerWrapper class="flex flex-col gap-6 py-16">
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

      <PaginationBar
        v-if="characters?.info"
        :current-page="page"
        :total-pages="characters.info.pages"
      />
    </ContainerWrapper>
  </div>
</template>
