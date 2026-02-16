export default defineEventHandler(async () => {
  const { apiBaseUrl } = useRuntimeConfig();
  return $fetch(`${apiBaseUrl}/posts`);
});

