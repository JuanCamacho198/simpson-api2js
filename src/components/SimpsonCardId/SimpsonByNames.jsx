import "./SimpsonbyNames.css"

export function SimpsonByNames({ simpsons }) {
    return (
        <>
            
            {simpsons.map((simpson) => (
                <div className="simpsons-card" key={simpson.id}>
                    <h2>{simpson.name}</h2>
                    <img
                        src={`https://cdn.thesimpsonsapi.com/200${simpson.portrait_path}`}
                        alt={simpson.name}
                        width={150}
                        loading="lazy"
                    />
                    <p>{simpson.occupation}</p>
                    <p>Age: {simpson.age}</p>
                    <p>Estado: {simpson.status}</p>
                </div>
            ))}
        </>
    )
};