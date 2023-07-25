import React from 'react';

import styles from './movie.module.css'
const Movie = ({movie}) => {

    return (
        <div className={styles.movieWrapper}>
            <div className={styles.titleWrapper}>Title: {movie.original_title}</div>
            <div className={styles.imgWrapper}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
            </div>
        </div>
    );
};

export {Movie};