import React from 'react';

import {useState,useEffect} from 'react'
const Movie = ({movie}) => {
    const [poster,setPoster] = useState([]);

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             accept: 'application/json',
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdjN2NhNTZmNDg1OGFkMzMzZGExMzFkOGIwNzk2MiIsInN1YiI6IjY0YmU4OGI3MGVkMmFiMDBlMmRiNmNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5hagmebzWdbalXyNHDJ32ZpaWTo9PrwxhrnaUPpV10'
    //         }
    //     };
    //
    //     fetch(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`, options)
    //         .then(response => response.json())
    //         .then(response => setPoster(response))
    //         .catch(err => console.error(err));
    // },[])

    // console.log(movie.poster_path)
    return (
        <div>
            <div>Title: {movie.original_title}</div>
            <div>Release date: {movie.release_date}</div>
            <div>Poster path: {movie.poster_path}</div>
            <img src=`https://image.tmdb.org/t/p/w500${movie.poster_path}` alt=""/>
            
        </div>
    );
};

export {Movie};