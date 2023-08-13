import {albumsActionsTypes} from "../../actions";

const initialState = {
    albums: []
}

const albumsReducer = (state = initialState,action) => {
    switch (action.type){
        case albumsActionsTypes.SET_ALBUMS:
            return{
                ...state,
                albums: action.payload
            }
        default:
            return state
    }
}

export {albumsReducer};