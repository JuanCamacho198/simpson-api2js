import { useEffect, useRef, useState } from "react";

export function useSearch() {
    const isFirstInput = useRef(true)

    const [error, setError] = useState(null)
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = query === ''
            return
        }

        if (query === '') {
            setError('No se puede buscar un personaje vacía')
            return
        }

        if (query.match(/^\d+$/)) {
            setError('No se puede buscar un personaje con un número')
            return
        }

        setError(null)
    }, [query])

    return {
        error,
        query,
        setQuery
    }
}