import { useNavigate } from "react-router-dom"
import "./SimpsonbyNames.css"

export function SimpsonByNames({ simpsons }) {
    const navigate = useNavigate();
    return (
        <>
            {simpsons.map((simpson) => (
                <div className="simpsons-card" key={simpson.id} onClick={() => navigate(`/simpson/${simpson.id}`)}>
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
        </>
    )
};