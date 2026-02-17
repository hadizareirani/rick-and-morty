import { useFetch } from '#app';
import type { Location } from '~/types/location';

export async function useLocation(id: string): Promise<Location | null> {
  const { data, error } = await useFetch<Location>(`/api/location/${id}`);
  if (error.value) {
    return null;
  }
  return data.value ?? null;
}