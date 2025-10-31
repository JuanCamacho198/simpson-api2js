import { useContext, useRef } from "react";
import { useFilteredSimpsonByName } from "../../hooks/useFilteredSimpsonByName";
import { SimpsonByNames } from "../SimpsonCardNames/SimpsonByNames";
import { PageContext } from "../../context/PageProvider";
import debounce from "just-debounce-it";
import { useSearch } from "../../hooks/useSearch";
import "./InputSearch.css";

export function InputSearch() {
  const { pageActual } = useContext(PageContext);
  const { query, setQuery, error: queryError } = useSearch();
  const { results, searching, setSearching, fetchFilteredSimpsons } =
    useFilteredSimpsonByName(pageActual);
  const inputRef = useRef();

  const handleSearch = debounce(async (query) => {
    fetchFilteredSimpsons(query);
  }, 300);

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    handleSearch(newQuery);
    setSearching(true)
  };

  return (
    <>
      <header>
        <div className="search">
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Buscar personaje por nombre:</label>
            <br /> <span>Solo funciona con los de la pagina actual</span>
            <div className="border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />{" "}
              </svg>

              <input
                type="text"
                ref={inputRef}
                value={query}
                onChange={handleChange}
                placeholder="Homero, Bart, Burns..."
                onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
              />

              <button
                onClick={() => fetchFilteredSimpsons(query)}
                className="btn-search"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </header>
      {searching && (
        <div className="results-container">
          <h3>
            Resultados para: <strong>{query}</strong>
          </h3>
          {results.length > 0 ? (
            <SimpsonByNames simpsons={results} />
          ) : (
            <p style={{ color: "red" }}>{queryError}</p>
          )}
        </div>
      )}
    </>
  );
}
