import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {getAlbums} from "../../../redux";
import {Album} from "./Album";
import styles from './Albums.module.css';

const Albums = () => {
    const dispatch = useDispatch();
    const albums = useSelector(store => store.albumsReducer.albums);

    useEffect(() => {
       dispatch(getAlbums())
    },[])

    console.log(albums)

    return (
        <div className={styles.AlbumsWrapper}>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {
    Albums,
};