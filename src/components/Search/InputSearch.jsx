import { useContext, useRef, useState } from "react"
import { filteredSimpsonByName } from "../../services/filteredSimpsonByName"
import { SimpsonByNames } from "../SimpsonCardId/SimpsonByNames";
import { PageContext } from "../../context/PageProvider";
import "./InputSearch.css"


export function InputSearch() {
    const pageActual = useContext(PageContext)
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const inputRef = useRef()

    const handleSearch = async () => {
        if (query.trim() === "") return;

        setSearching(true);
        const simpsons = await filteredSimpsonByName({ search: query, pageActual});
        setResults(simpsons);
    };

    return (
        <>
            <header>
                <div className="search">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label>Buscar personaje por nombre:</label>
                        <div className="border">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none"
                                    d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>

                            <input
                                type="text"
                                ref={inputRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Homero, Bart, Burns..."
                            />
                            <button onClick={handleSearch} className="btn-search">Buscar</button>
                        </div>
                    </form>
                </div>


            </header>
            {searching && (
                
                <div className="results-container">
                    <h3>Resultados para: <strong>{query}</strong></h3>
                    {results.length > 0
                        ? (<SimpsonByNames simpsons={results} />
                        )
                        
                        : <p className="no-results">No se encontraron personajes 😢</p>
                    }
                </div>
            )}
        </>
    )
}