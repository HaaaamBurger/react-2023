import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {episodeActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {Episode} from "../Episode/Episode";
import {Skeleton, Stack} from "@mui/material";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episode} = useSelector(state => state.episode);
    const [query,setQuery] = useSearchParams({page: '1'});
    const {isLoading} = useSelector(state => state.episode);

    console.log(isLoading)

    useEffect(() => {
        dispatch(episodeActions.allEpisode(query.get('page')));
        setQuery(prev => ({...prev,page: query.get('page')}))
    }, []);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {episode.map(value => (
                <div style={{margin: '15px', width: '23%'}} key={value.id} >
                    {
                        isLoading ? (
                            <div>
                                <Episode episode={value}/>
                            </div>
                        ) : (
                            <Stack spacing={1}>
                                {/* For variant="text", adjust the height via font-size */}
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                {/* For other variants, adjust the size with `width` and `height` */}
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={60} />
                                <Skeleton variant="rounded" width={210} height={60} />
                            </Stack>
                        )
                    }
                </div>
            ))}
        </div>
    );
};

export {
    Episodes,
};