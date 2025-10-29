import useFetchSimpsons from "../../hooks/useFetchSimpsons";

import "./SimpsonCard.css";

function SimpsonPage({ page }) {
  const { data, loading, error } = useFetchSimpsons(
    `https://thesimpsonsapi.com/api/characters?page=${page}`
  );

  if (error) return <p>Error: {error}</p>;
  if (!data || loading) return <p>Cargando...</p>;

  return (
    <section>
      {data.results.map((simpson) => (
        <div className="Simpson-card" key={simpson.id}>
          <h2>{simpson.name}</h2>
          <img
            src={`https://cdn.thesimpsonsapi.com/200${simpson.portrait_path}`}
            alt={simpson.name}
            width={150}
            loading="lazy"
          />
          <p className="occupation">
            {simpson.occupation && simpson.occupation.trim() !== ""
              ? simpson.occupation
              : "Ocupación desconocida"}
          </p>

          <p className="age">
            <span>Edad: </span>
            {simpson.age !== null && simpson.age !== undefined
              ? simpson.age
              : "No info"}
          </p>

          <p className="status">
            <span>Estado: </span>
            {simpson.status && simpson.status.trim() !== ""
              ? simpson.status
              : "Desconocido"}
          </p>
        </div>
      ))}
    </section>
  );
}

export default SimpsonPage;
