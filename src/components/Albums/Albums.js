import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {placeholderServices} from "../../services/placeholderServices";
import {albumsActions} from "../../redux/actions/albumsActions";
import {Album} from "./Album";

const Albums = () => {
    const postsDispatch = useDispatch();
    const albums = useSelector(store => store.albumsReducer.albums);

    useEffect(() => {
        placeholderServices.getAlbums().then(({data}) => postsDispatch(albumsActions.setAll(data)));
    },[])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {
    Albums,
};