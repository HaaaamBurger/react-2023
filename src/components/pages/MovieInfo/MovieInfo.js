import React, {useEffect, useState} from 'react';

import styles from './movieInfo.module.css'
import {useParams} from "react-router-dom";
import {axiosMovieServices} from "../../../services/axiosMovieServices";
const MovieInfo = () => {

    const [movie,setMovie] = useState(null);

    const {id:movieId} = useParams();

    useEffect(() => {
        axiosMovieServices.getAll(movieId).then(({data}) => setMovie(data));
    },[])

    console.log(movie)

    return (
        <div>
            {movie &&
                <div className={styles.infoWrapper}>
                    <div className={styles.moviePosterWrapper}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" style={{borderRadius:'5px'}}/>
                    </div>
                    <div className={styles.movieInfoWrapper}>
                        <h1>{movie.title}</h1>
                        <hr/>
                        <div style={{display: 'flex', margin: '10px 0 10px 0'}}>
                            <h3 style={{marginRight: '20px'}}>⭐{movie.vote_average} | {movie.vote_count}</h3>
                            <p>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m ・ {movie.genres.map(genre => genre.name + ', ')} ・{movie.release_date.split('-')[0]}</p>
                        </div>
                        <h3>・{movie.tagline}・</h3>
                        {/*<h4>{movie.overview.split(' ').map((word,index) => index / 4 === 0 ? word + <br/> : word)}</h4>*/}
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" style={{marginTop: '30px',borderRadius: '5px',border: '1px solid white'}}/>
                    </div>
                </div>}
        </div>
    );
};

export {
    MovieInfo,
};