import {useState, useEffect} from 'react';


function useCurrencinfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest`)
        .then(res => res.json())
        .then(res => setData(res[currency]))
    }, [currency])
    
    return data;
}
export default useCurrencinfo;
