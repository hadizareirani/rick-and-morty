import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const id = event.context.params?.id || event.req.url?.split('/').pop();
  if (!id) {
    return { error: 'No episode id provided' };
  }
  const res = await fetch(`${config.public.apiBaseUrl}/episode/${id}`);
  if (!res.ok) {
    return { error: 'Episode not found' };
  }
  return await res.json();
});