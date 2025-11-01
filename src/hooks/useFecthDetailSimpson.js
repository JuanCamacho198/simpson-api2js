import { useEffect, useState } from "react";

export function useFecthDetailSimpson({ simpson_id  }) {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://thesimpsonsapi.com/api/characters/${simpson_id }`);
                if (!response.ok) throw new Error('Character not found');
                const data = await response.json();
                setCharacter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (simpson_id) {
            fetchCharacter();
        }
    }, [simpson_id]);

    return {
        character,
        loading,
        error
    }
}