export const filteredSimpsonByName = async ({ search , page}) => {
  if (!search || search.trim() === "") return null;

  try {
    // Trae todos los personajes
    const response = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);
    const json = await response.json();

    // Filtra los personajes por el término de búsqueda
    const filtered = json.results?.filter((simpson) =>
      simpson.name.toLowerCase().includes(search.toLowerCase())
    );

    // Devuelve los datos formateados
    return filtered
  } catch (error) {
    console.error(error);
    throw new Error("Error buscando personajes");
  }
};
