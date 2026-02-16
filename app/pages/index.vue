<script setup lang="ts">
const { fetchAll } = useCharacter();
const { data: characters, pending } = await fetchAll();
</script>
<template>
  <div>
    <AppHeader>
      <SearchBar />
    </AppHeader>

    <div>
      <pre>
      <code>
         {{ JSON.stringify(characters, null, 2) }}
      </code>
     </pre>
    </div>
  </div>
</template>
