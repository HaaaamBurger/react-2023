const initialState = {
    info: {},
    results: []
}

const rickmortyReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'SET_ALL':
            return {
                ...state,
                info: action.payload.info,
                results: action.payload.results
            }
        default:
            return state
    }
}

export {rickmortyReducer};