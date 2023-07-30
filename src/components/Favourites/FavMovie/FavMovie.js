import React from 'react';

import styles from './favMovie.module.css';
const FavMovie = ({movie}) => {

    return (
        <div className={styles.movieWrapper}>
            <div className={styles.imgWrapper}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
            </div>
        </div>
    );
};

export {FavMovie};