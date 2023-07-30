import React, {useEffect, useState} from 'react';

import styles from './favourites.module.css'
import {NoFavourites} from "./NoFavourites";
import {FavMovie} from "./FavMovie/FavMovie";

const Favourites = () => {
    const [favMovies,setFavMovies] = useState([]);
    let getFavMovies = null;

    useEffect(() => {
        getFavMovies = JSON.parse(localStorage.getItem('favourites'));
        if (getFavMovies) {
            setFavMovies(getFavMovies);
        }
    },[getFavMovies]);



    return (
        <div className={styles.favouritesWrapper}>
            {
                favMovies.length ?
                    favMovies && favMovies.map((movie,index) => <FavMovie movie={movie} key={index}/>) :
                        <NoFavourites/>
            }
        </div>
    );
};

export {
    Favourites,
};