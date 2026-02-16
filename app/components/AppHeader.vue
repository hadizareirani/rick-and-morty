<template>
  <header class="bg-gray-900 py-6 px-6">
    <div class="container mx-auto">
      <div class="flex items-center gap-8">
        <!-- Logo (shared) -->
        <NuxtLink to="/" class="flex-shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
            alt="Rick and Morty Logo"
            class="h-12"
          />
        </NuxtLink>

        <!-- Different content per page -->
        <div class="flex-1">
          <slot />
        </div>
      </div>
    </div>
  </header>
</template>

