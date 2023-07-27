import React, {useEffect, useState} from 'react';

import styles from './movieInfo.module.css'
import {useNavigate, useParams} from "react-router-dom";
import {axiosMovieServices} from "../../services";
import {Rating} from "react-simple-star-rating";

const MovieInfo = () => {
    const pageId = JSON.parse(localStorage.getItem('pageId'));
    const navigation = useNavigate();
    const {id:movieId} = useParams();

    const [movie,setMovie] = useState(null);
    const [rating, setRating] = useState('Your rate')

    // let rateMovie = JSON.parse(localStorage.getItem('movieRate'));
    // let localRate = null;

    // if (rateMovie) {
    //     rateMovie.find(movie => movie.movieId === movieId ? localRate = movie.rate : null);
    //     setRating(localRate);
    // }

    const handleRating = (rate) => {
    //     let rateMovie = JSON.parse(localStorage.getItem('movieRate'));
    //     if (rateMovie) {
    //          rateMovie.find(movie => {
    //              if (movie.movieId === rateMovie.movieId) {
    //                  rateMovie.push({movieId: movieId, rate: rate});
    //                  localStorage.setItem('movieRate',JSON.stringify(rateMovie));
    //              } else {
    //                  rateMovie.push({movieId: movieId, rate: rate});
    //                  localStorage.setItem('movieRate',JSON.stringify(rateMovie));
    //              }
    //          })
    //     } else {
    //         rateMovie.push({movieId: movieId, rate: rate});
    //         localStorage.setItem('movieRate',JSON.stringify(rateMovie));
    // }
        switch (rate) {
            case 1: {
                setRating('Terrible');
                return;
            }
            case 2: {
                setRating('Bad');
                return;
            }
            case 3: {
                setRating('Good');
                return;
            }
            case 4: {
                setRating('Great');
                return;
            }
            case 5: {
                setRating('Awesome');
                return;
            }
        }
    }

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
                        <hr/>

                        <div>
                            <h3>{movie.tagline}</h3>
                        </div>
                        <div className={styles.overView}>
                            <p>{movie.overview}</p>
                        </div>

                        <div className={styles.starsRating}>
                            <Rating onClick={handleRating}/>
                            <div><h3>{rating}</h3></div>
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