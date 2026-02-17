import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
     const config = useRuntimeConfig();
  const id = event.context.params?.id || event.req.url?.split('/').pop();
  if (!id) {
    return { error: 'No location id provided' };
  }
  const res = await fetch(`${config.public.apiBaseUrl}/location/${id}`);
  if (!res.ok) {
    return { error: 'Location not found' };
  }
  return await res.json();
});