import React from 'react';
import {useEffect,useState} from 'react';

import {Movie} from './Movie/Movie'
import {axiosFilmsServices} from "../../services/axiosFilmsServices";
import styles from './movies.module.css'

// import {axiosFilmsServices} from '../services/axiosFilmsServices'

const Movies = () => {
    const [movies,setMovies] = useState();

    useEffect(() => {
       axiosFilmsServices.getAll().then(({data}) => setMovies(data.results))
    },[])

    console.log(movies);

    return (
        <div className={styles.moviesWrapper}>
            {movies && movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    )
};

export {
    Movies,
};