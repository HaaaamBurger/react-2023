import React from 'react';
import {useEffect,useState} from 'react';
import {Movie} from './Movie/Movie'

// import {axiosServices} from '../services/axiosServices'

const Movies = () => {
    const [movies,setMovies] = useState();
    // useEffect(() => {
    //     axiosServices.getFilms().then(({data}) => setFilms(data));
    // },[])

    // console.log(films)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdjN2NhNTZmNDg1OGFkMzMzZGExMzFkOGIwNzk2MiIsInN1YiI6IjY0YmU4OGI3MGVkMmFiMDBlMmRiNmNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5hagmebzWdbalXyNHDJ32ZpaWTo9PrwxhrnaUPpV10'
            }
        };

        fetch('https://api.themoviedb.org/3/discover/movie?page=1', options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    },[])
    return (
        <div>
            {movies && movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    )
};

export {
    Movies,
};