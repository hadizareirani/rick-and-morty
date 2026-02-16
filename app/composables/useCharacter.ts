export const useCharacter = () => {
  const fetchAll = (query?: Record<string, string>) =>
    useFetch("/api/character", {
      query,
    });
  const fetchOne = (id: number) => useFetch(`/api/character/${id}`);

  return { fetchAll, fetchOne };
};

