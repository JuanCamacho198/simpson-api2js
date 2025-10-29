import useFecthSimpsons from "../../hooks/useFetchSimpsons";
import { useContext } from "react";
import { PageContext } from "../../context/PageProvider";
import "./Pagination.css"

export function Pagination({ page }) {
    const { data, loading, error } = useFecthSimpsons(`https://thesimpsonsapi.com/api/characters?page=${page}`);

    if (error) return <p>Error: {error}</p>;
    if (!data || loading) return <p>Cargando...</p>;


    const TOTAL_PAGES = Math.ceil(data.count / 20);
    const { pageActual, setPageActual } = useContext(PageContext);

    const handlePagination = () => {
        if (page > 1 && page < TOTAL_PAGES) {
            setPageActual(page + 1);

        }
    }

    return (
        <footer>
            <div className="pagination">
                <ul>
                    <li>-</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li onClick={handlePagination}>+</li>
                </ul>
            </div>
        </footer>
    )
}