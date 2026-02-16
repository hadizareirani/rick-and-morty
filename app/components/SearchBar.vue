<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const searchQuery = ref(route.query.name ? (route.query.name as string) : "");

const handleSearch = () => {
  const query = { ...route.query };

  if (searchQuery.value) {
    query.name = searchQuery.value;
  } else {
    delete query.name;
  }

  query.page = "1";

  router.push({ query });
};
</script>

<template>
  <div class="py-6 w-full">
    <div class="bg-background flex gap-4 p-4 rounded w-full">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for characters..."
        class="bg-gray px-4 py-3 rounded text-white transition-colors w-full focus:border-glow focus:outline-none focus:ring-1 focus:ring-glow"
        @keyup.enter="handleSearch"
      />
      <button
        class="bg-glow flex font-medium gap-2 items-center justify-center px-4 rounded shrink-0 text-darkCyan text-sm"
        @click="handleSearch"
      >
        <IconSearch :size="20" class="text-darkCyan" />
        Search
      </button>
    </div>
  </div>
</template>
