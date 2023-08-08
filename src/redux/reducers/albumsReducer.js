const initialState = {
    albums: []
}

const albumsReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'SET_ALL_ALBUMS':
            return{
                ...state,
                albums: action.payload
            }
        default:
            return state
    }
}

export {albumsReducer};