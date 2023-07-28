import React from 'react';
import {useState,useEffect} from 'react';

import {axiosGenresServices} from '../../services/axiosGenresServices';
import {axiosMoviesServices} from '../../services/axiosMoviesServices';
const Genres = () => {
    const [genres,setGenres] = useState([]);
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        axiosMoviesServices.getAll().then(({data}) => setMovies(data.results));
    },[])

    useEffect(() => {
        axiosGenresServices.getAll().then(({data}) => setGenres(data.genres))
    },[]);

    let genresMovie = [];

    movies.forEach(movie => {
        for (let genre of movie.genre_ids) {
            if (genre === genres[2].id) {
                genresMovie.push({genre: genres[2].name, title: movie.title})
            }
        }
    })

    console.log(genresMovie)
    console.log(movies,genres);

    return (
        <div>

        </div>
    );
};

export {Genres};