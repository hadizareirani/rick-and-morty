import type { ICharacter } from "~/types/character";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const id = getRouterParam(event, "id");
  return $fetch<ICharacter>(`${config.public.apiBaseUrl}/character/${id}`);
});

