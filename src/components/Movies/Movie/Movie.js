import React from 'react';

import {useNavigate} from "react-router-dom";
import styles from './movie.module.css';
const Movie = ({movie}) => {

    const movieNavigator = useNavigate();

    return (
        <div className={styles.movieWrapper}>
            <div className={styles.imgWrapper} onClick={() => {
                movieNavigator(`movie/${movie.id}`);
                localStorage.setItem('movie',JSON.stringify(movie));
            }}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
            </div>
        </div>
    );
};

export {Movie};