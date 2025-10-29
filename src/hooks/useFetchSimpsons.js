import { useEffect, useState } from "react"


function useFecthSimpsons(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController();
        const fecthData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url, { signal: controller.signal })
                if (!response.ok) throw new Error("Error al obtener datos de la URL");
                const data = await response.json();
                setData(data)
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
            } finally {
                setLoading(false)
            }
        }

        fecthData();

        return () => controller.abort(); // cleanup

    }, [url]);

    return { data, loading, error };

}

export default useFecthSimpsons

