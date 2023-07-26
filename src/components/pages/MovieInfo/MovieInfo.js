import React from 'react';

import styles from './movieInfo.module.css'
const MovieInfo = () => {
    const getMovie = JSON.parse(localStorage.getItem('movie'));
    localStorage.clear('movie');

    console.log(getMovie);
    return (
        <div className={styles.infoWrapper}>
            <div className={styles.movieInfoWrapper}>
                <img src={`https://image.tmdb.org/t/p/w500${getMovie?.poster_path}`} alt=""/>
            </div>

        </div>
    );
};

export {
    MovieInfo,
};