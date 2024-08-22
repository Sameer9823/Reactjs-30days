import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://api.frankfurter.app/latest?base=${currency}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch currency data');
                }
                return res.json();
            })
            .then((res) => {
                setData(res.rates);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [currency]);

    return { data, loading, error };
}

export default useCurrencyInfo;
