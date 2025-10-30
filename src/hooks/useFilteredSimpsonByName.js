import { useState, useCallback } from "react";

export function useFilteredSimpsonByName(page) {
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);

  // ✅ función memorizada
  const fetchFilteredSimpsons = useCallback(
    async (search) => {
      if (!search || search === "") {
        setResults([]);
        return;
      }

      setSearching(true);
      setError(null);

      try {
        const response = await fetch(
          `https://thesimpsonsapi.com/api/characters?page=${page}`
        );
        const json = await response.json();

        const filtered = json.results?.filter((simpson) =>
          simpson.name.toLowerCase().includes(search.toLowerCase())
        );

        setResults(filtered || []);
      } catch (err) {
        console.error(err);
        setError("Error buscando personajes");
      }
    },
    [page]
  );

  return { results, searching, setSearching, error, fetchFilteredSimpsons };
}
