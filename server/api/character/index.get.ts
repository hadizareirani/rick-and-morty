import type { ICharacterApiResponse } from "~/types/character";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  return $fetch<ICharacterApiResponse>(
    `${config.public.apiBaseUrl}/character`,
    {
      query,
    },
  );
});

