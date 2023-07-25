import React from 'react';
import {useEffect,useState} from 'react';

import {axiosServices} from '../services/axiosServices'

const Films = () => {
    const [films,setFilms] = useState();
    useEffect(() => {
        axiosServices.getFilms().then(({data}) => setFilms(data));
    })

    console.log(films)
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdjN2NhNTZmNDg1OGFkMzMzZGExMzFkOGIwNzk2MiIsInN1YiI6IjY0YmU4OGI3MGVkMmFiMDBlMmRiNmNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5hagmebzWdbalXyNHDJ32ZpaWTo9PrwxhrnaUPpV10'
    //     }
    // };
    //
    // fetch('https://api.themoviedb.org/3/discover/movie?page=1', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    return (
        <div>
            Films
        </div>
    );
};

export {
    Films,
};