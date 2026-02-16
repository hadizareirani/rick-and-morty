<script setup lang="ts">
interface Props {
  currentPage: number;
  totalPages: number;
}

const props = defineProps<Props>();
const router = useRouter();
const route = useRoute();

const pageNumbers = computed(() => {
  const pages: (number | string)[] = [];
  const maxVisible = 5;
  const half = Math.floor(maxVisible / 2);

  let start = Math.max(1, props.currentPage - half);
  const end = Math.min(props.totalPages, start + maxVisible - 1);

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }

  if (start > 1) {
    pages.push("...");
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < props.totalPages) {
    pages.push("...");
  }

  return pages;
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    router.push({ query: { ...route.query, page: page.toString() } });
  }
};

const goToFirst = () => goToPage(1);
const goToLast = () => goToPage(props.totalPages);
const goToPrev = () => goToPage(props.currentPage - 1);
const goToNext = () => goToPage(props.currentPage + 1);
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <button
      class="pagination-btn"
      :disabled="currentPage === 1"
      aria-label="First page"
      @click="goToFirst"
    >
      <IconDoubleArrowLeft />
    </button>

    <button
      :disabled="currentPage === 1"
      class="pagination-btn"
      aria-label="Previous page"
      @click="goToPrev"
    >
      <IconArrowLeft />
    </button>

    <button
      v-for="(page, index) in pageNumbers"
      :key="index"
      :class="{
        'pagination-btn': true,
        'pagination-active': page === currentPage,
      }"
      :aria-label="`Page ${page}`"
      :disabled="page === '...'"
      :aria-current="page === currentPage ? 'page' : undefined"
      @click="typeof page === 'number' ? goToPage(page) : undefined"
    >
      {{ page }}
    </button>

    <button
      :disabled="currentPage === totalPages"
      class="pagination-btn"
      aria-label="Next page"
      @click="goToNext"
    >
      <IconArrowRight />
    </button>

    <button
      :disabled="currentPage === totalPages"
      class="pagination-btn"
      aria-label="Last page"
      @click="goToLast"
    >
      <IconDoubleArrowRight />
    </button>
  </div>
</template>

<style scoped>
.pagination-btn {
  @apply flex h-6 w-6 items-center justify-center rounded-full text-base font-medium text-grayLight transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:bg-glow hover:text-darkCyan;
}

.pagination-active {
  @apply bg-glow text-darkCyan;
}
</style>

