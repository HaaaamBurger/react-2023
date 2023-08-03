import {useEffect, useState} from 'react';

const useFetch = (route) => {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${route}`)
            .then(response => response.json())
            .then(value => setData(value));
    },[])

    return data;
};

export {
    useFetch,
};