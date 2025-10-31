import { SimpsonPage } from "../SimpsonCard/SimpsonPage";
import { useContext } from "react";
import { PageContext } from "../../context/PageProvider.jsx";
import { InputSearch } from "../Search/InputSearch.jsx";
import { Pagination } from "../Pagination/Pagination.jsx";
import "./Home.css";

export function Home() {
  const { pageActual, setPageActual } = useContext(PageContext);
  const TOTAL_PAGES = Math.ceil(1182 / 20);

  return (
    <>
      <InputSearch />
      <main>
        <h1>Bienvenido a la página de los Simpson</h1>
        <p>
          Aquí puedes buscar información sobre tus personajes favoritos de Los
          Simpson.
        </p>
        <SimpsonPage page={pageActual} />
      </main>
      <footer>
        <Pagination
          totalPages={TOTAL_PAGES}
          pageActual={pageActual}
          onPageChange={(newPage) => setPageActual(newPage)} />
      </footer>
    </>
  );
}
