import React from 'react';
import {useEffect,useState} from 'react';

import {Movie} from './Movie/Movie'
import {axiosFilmsServices} from "../../services/axiosFilmsServices";
import styles from './movies.module.css'

const Movies = () => {
    const [movies,setMovies] = useState();
    const [page,setPage] = useState(1);

    useEffect(() => {
       axiosFilmsServices.getAll(page).then(({data}) => setMovies({total: data.total_pages,results: data.results}))
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
                    <button onClick={pageHandleDown}>Prev</button>
                    <div className={styles.pageCounter}>{page} of {movies?.total}</div>
                    <button onClick={pageHandleUp}>Next</button>
                </div>
            </div>

    )
};

export {
    Movies,
};