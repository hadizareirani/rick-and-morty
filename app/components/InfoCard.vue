<template>
  <div class="bg-cyan/5 flex flex-col gap-4 p-4 rounded-2xl">
    <h3 class="font-bold text-white text-xl truncate">
      <slot name="title" />
    </h3>
    <span class="font-medium text-cyan text-base">
      <slot name="value" />
    </span>
    <span class="font-normal text-grayMedium text-base">
      <slot name="extra" />
    </span>
  </div>
</template>
