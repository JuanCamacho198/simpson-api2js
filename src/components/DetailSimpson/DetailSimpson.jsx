import { useFecthDetailSimpson } from '../../hooks/useFecthDetailSimpson';
import { useParams } from 'react-router-dom';
import './DetailSimpson.css';

export function DetailSimpson() {
    const { id } = useParams();
    const { character, loading, error } = useFecthDetailSimpson({simpson_id : id});

    
    if (loading) return <div className="detail-loading">Loading...</div>;
    if (error) return <div className="detail-error">Error: {error}</div>;
    if (!character) return null;
    return (
        <main className="detail-simpson">
            <div className="detail-container">
                <div className="detail-header">
                    <img 
                        src={`https://cdn.thesimpsonsapi.com/1280${character.portrait_path}`}
                        alt={character.name}
                        className="detail-portrait"
                    />
                    <div className="detail-info">
                        <h1 className="detail-name">{character.name}</h1>
                        <div className="detail-stats">
                            <span className="stat-item"><strong>Age:</strong> {character.age ? character.age : 'Unknown'}</span>
                            <span className="stat-item"><strong>Gender:</strong> {character.gender}</span>
                            <span className="stat-item"><strong>Status:</strong> <span className={`status ${character.status.toLowerCase()}`}>{character.status}</span></span>
                        </div>
                        <p className="detail-occupation"><strong>Occupation:</strong> {character.occupation}</p>
                    </div>
                </div>

                <div className="detail-description">
                    <h2>About</h2>
                    <p>{character.description}</p>
                </div>

                {character.phrases && character.phrases.length > 0 && (
                    <div className="detail-phrases">
                        <h2>Famous Phrases</h2>
                        <ul className="phrases-list">
                            {character.phrases.map((phrase, index) => (
                                <li key={index} className="phrase-item">"{phrase}"</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </main>
    );
}