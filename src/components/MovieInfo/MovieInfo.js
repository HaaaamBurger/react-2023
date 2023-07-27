import React, {useEffect, useState} from 'react';

import styles from './movieInfo.module.css'
import {useNavigate, useParams} from "react-router-dom";
import {axiosMovieServices} from "../../services";

const MovieInfo = () => {

    const pageId = JSON.parse(localStorage.getItem('pageId'));
    const navigation = useNavigate();
    console.log(pageId)

    const [movie,setMovie] = useState(null);

    const {id:movieId} = useParams();

    useEffect(() => {
        axiosMovieServices.getAll(movieId).then(({data}) => setMovie(data));
    },[])



    return (
        <div>
            {movie &&
                <div className={styles.infoWrapper}>
                    <div className={styles.moviePosterWrapper}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt=""/>
                    </div>
                    <div className={styles.movieInfoWrapper}>
                        <div>
                            <h1>{movie.title}</h1>
                        </div>

                        <hr/>

                        <div className={styles.detailInfo}>
                            <h3>⭐{movie.vote_average} | {movie.vote_count}</h3>
                            <p>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m ・ {movie.genres.map(genre => genre.name + ', ')} ・{movie.release_date.split('-')[0]} ・ {movie.status}</p>
                        </div>

                        <div>
                            <h3>{movie.tagline}</h3>
                        </div>
                        <div className={styles.overView}>
                            <p>{movie.overview}</p>
                        </div>
                        <div className={styles}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" className={styles.backdropWrapper}/>
                        </div>
                    </div>

                        <div className={styles.backButton} onClick={() => {
                            navigation(`/page/${pageId}`);
                            localStorage.clear();
                        }}>Back</div>
                </div>}
        </div>
    );
};

export {
    MovieInfo,
};