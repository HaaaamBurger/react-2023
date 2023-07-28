import React from 'react';
import {useEffect,useState} from 'react';

import styles from './movies.module.css';
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Movie} from './Movie/Movie';
import {axiosGenresServices} from '../../services/axiosGenresServices';
import {axiosMoviesServices} from "../../services";

const Movies = () => {
    const pageId = useParams();

    const navigation = useNavigate();
    const [movies,setMovies] = useState();
    const [page,setPage] = useState(+pageId.page);
    const [genres,setGenres] = useState([]);

    useEffect(() => {
       navigation(`/page/${page}`);
    },[page]);

    useEffect(() => {
       axiosMoviesServices.getAll(page).then(({data}) => setMovies({total: 500,results: data.results}))
    },[page]);

    useEffect(() => {
        axiosGenresServices.getAll().then(({data}) => setGenres(data.genres))
    },[]);

    console.log(genres)

    const pageHandleUp = () => {
        setPage(prevState => prevState !== movies.total ? prevState + 1 : prevState = movies.total);
    }

    const pageHandleDown = () => {
        setPage(prevState => prevState !== 1 ? prevState - 1 : prevState = 1);
    }

    const {handleSubmit,
        register,
        reset,
        formState: {errors,isValid}
    } = useForm({
        mode: 'all'
    })

    console.log(errors)
    const save = (value) => {
        console.log(value)
        setPage(+value.page);
        navigation(`/page/${value.page}`);
        reset();
    }

    return (
            <div style={{paddingBottom: '50px'}}>
                <div className={styles.pageSearchWrapper}>
                    <form onSubmit={handleSubmit(save)} className={styles.searchForm}>
                        <div className={styles.selectGenreInput}>
                            <select>
                                {genres.map(genre => <option {...register(`${genre.name}`)}>{genre.name}</option>)}
                            </select>
                        </div>
                        <div className={styles.pageSearchInput}>
                            <input type="number" {...register('page', {
                                max:{
                                    value: 500,
                                    message:'Maximum 500 pages!'
                                },
                                min:{
                                    value: 1,
                                    message: 'Paging starts from first page!'
                                }
                            })}/>
                            <button disabled={!isValid}>Find</button>
                        </div>
                        <div className={styles.errorReport}>
                            {errors.page && <h4>{errors.page.message}</h4>}
                        </div>
                    </form>
                </div>

                <div  className={styles.moviesWrapper}>
                    {movies && movies.results.map(movie => <Movie movie={movie} key={movie.id} pageId={page}/>)}
                </div>

                <div className={styles.paginationWrapper}>
                    <button onClick={() => {
                        pageHandleDown();
                        navigation(`/page/${page}`);
                    }}>Back</button>
                    <div className={styles.pageCounter}>{page} of {movies?.total}</div>
                    <button onClick={() => {
                        pageHandleUp();
                        navigation(`/page/${page}`);
                    }}>Next</button>
                </div>
            </div>
    )
};

export {
    Movies,
};