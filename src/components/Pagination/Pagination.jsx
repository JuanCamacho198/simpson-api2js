import { useState, useEffect } from "react";
import "./Pagination.css";

export function Pagination({ totalPages, pageActual, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(pageActual);

  useEffect(() => {
    setCurrentPage(pageActual);
  }, [pageActual]);

  //array de páginas
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  //rango de páginas (6 por defecto)
  const start = Math.max(0, currentPage - 3);
  const visiblePages = pages.slice(start, start + 6);

 
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleChangePage = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <footer>
      <nav className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="nav-btn"
        >
          ←
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handleChangePage(page)}
            className={`page-btn ${page === currentPage ? "active" : ""}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="nav-btn"
        >
          →
        </button>
      </nav>
    </footer>
  );
}
