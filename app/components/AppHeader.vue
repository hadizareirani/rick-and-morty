import { NuxtImg } from '../../.nuxt/components';
<template>
  <header class="bg-gray-900 py-6 px-6">
    <div class="container mx-auto">
      <div class="flex items-center gap-8">
        <!-- Logo (shared) -->
        <NuxtLink to="/" class="flex-shrink-0">
          <NuxtImg
            src="/images/logo.png"
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

