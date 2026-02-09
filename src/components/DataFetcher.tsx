// src/components/DataFetcher.tsx
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api-service';

const DataFetcher: React.FC = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError(String(err)); // Convert other potential types to a string
                }
            }
        };

        getData();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Data Loaded</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataFetcher;
