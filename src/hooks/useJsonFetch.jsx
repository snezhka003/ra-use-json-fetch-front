import {useState, useEffect} from 'react';

export default function useJsonFetch(url, initialData) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();

                setData(data);
                setError(null);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url])

    return [data, loading, error];
}