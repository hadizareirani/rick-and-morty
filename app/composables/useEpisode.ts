import { useFetch } from '#app';

export async function useEpisode(id: string) {
  const { data, error } = await useFetch(`/api/episode/${id}`);
  if (error.value) {
    return null;
  }
  return data.value;
}