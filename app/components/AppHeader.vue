<script lang="ts" setup>
type Props = {
  gradientHideInMobile?: boolean;
};
withDefaults(defineProps<Props>(), {
  gradientHideInMobile: false,
});
</script>
<template>
  <header
    class="bg-gradient-to-r from-background to-dark overflow-hidden relative"
  >
    <ContainerWrapper class="flex flex-col relative z-10">
      <div class="py-3">
        <NuxtLink to="/" class="flex-shrink-0">
          <NuxtImg
            src="/images/logo.png"
            alt="Rick and Morty Logo"
            class="h-9"
          />
        </NuxtLink>
      </div>
      <div class="relative z-10">
        <slot />
      </div>
      <i
        :class="`absolute bg-glow blur-[5rem] h-[9.5rem] rounded-full start-0 bottom-0 w-[12.5rem] z-0 md:start-40 md:top-1/2 md:bottom-auto ${gradientHideInMobile ? 'hidden md:block' : ''}`"
      />
    </ContainerWrapper>
  </header>
</template>
