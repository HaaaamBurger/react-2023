import React from 'react';
import {useEffect,useState} from 'react';

import {Movie} from './Movie/Movie'
import styles from './movies.module.css'
import {axiosMoviesServices} from "../../services";
import {useNavigate} from "react-router-dom";

const Movies = () => {
    const [movies,setMovies] = useState();
    const [page,setPage] = useState(1);

    const navigation = useNavigate();
    useEffect(() => {
       axiosMoviesServices.getAll(page).then(({data}) => setMovies({total: data.total_pages,results: data.results}))
    },[page])

    const pageHandleUp = () => {
        setPage(prevState => prevState !== movies.total ? prevState + 1 : prevState = movies.total)
    }

    const pageHandleDown = () => {
        setPage(prevState => prevState !== 1 ? prevState - 1 : prevState = 1);
    }

    return (
            <div style={{paddingBottom: '50px'}}>
                <div  className={styles.moviesWrapper}>
                    {movies && movies.results.map(movie => <Movie movie={movie} key={movie.id}/>)}
                </div>

                <div className={styles.paginationWrapper}>
                    <button onClick={() => {
                        pageHandleDown();
                        // navigation(`/films/${page}`)
                    }}>Back</button>
                    <div className={styles.pageCounter}>{page} of {movies?.total}</div>
                    <button onClick={() => {
                        pageHandleUp();
                        // navigation(`/films/${page}`)
                    }}>Next</button>
                </div>
            </div>
    )
};

export {
    Movies,
};