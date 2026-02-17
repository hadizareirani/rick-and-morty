import { useFetch } from '#app';

export async function useLocation(id: string) {
  const { data, error } = await useFetch(`/api/location/${id}`);
  if (error.value) {
    return null;
  }
  return data.value;
}