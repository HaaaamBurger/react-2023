import {placeholderService} from "../../../services";

const albumsActionsTypes = {
    SET_ALBUMS: 'SET_ALBUMS'
}

const albumsActions = {
    setAll: (data) => ({type: albumsActionsTypes.SET_ALBUMS, payload: data})
}

const getAlbums = () => async(dispatch) => {
    const {data} = await placeholderService.getAlbums();
    dispatch(albumsActions.setAll(data));
}

export {albumsActionsTypes,getAlbums};