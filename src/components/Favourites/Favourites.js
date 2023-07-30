import React, {useEffect, useState} from 'react';

import styles from './favourites.module.css'
import {Movie} from "../Movies/Movie/Movie";
import {NoFavourites} from "./NoFavourites";

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
                favMovies ?
                    favMovies && favMovies.map((movie,index) => <Movie movie={movie} key={index}/>) :
                        <NoFavourites/>
            }
        </div>
    );
};

export {
    Favourites,
};