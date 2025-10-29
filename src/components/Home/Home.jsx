import SimpsonCard from "../SimpsonCard/SimpsonPage";
import { useContext } from "react";
import { PageContext } from "../../context/PageProvider.jsx";
import { InputSearch } from "../Search/InputSearch.jsx";
import { Pagination } from "../Pagination/Pagination.jsx";
import "./Home.css";

export function Home() {
  const { pageActual } = useContext(PageContext);

  return (
    <>
      <InputSearch />
      <main>
        <h1>Bienvenido a la página de los Simpson</h1>
        <p>
          Aquí puedes buscar información sobre tus personajes favoritos de Los
          Simpson.
        </p>
        <SimpsonCard page={pageActual} />
      </main>
      <footer>
        <Pagination page={pageActual} />
      </footer>
    </>
  );
}
