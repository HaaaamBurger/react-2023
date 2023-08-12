import {postsActionsTypes} from "../actions/postsActions";

const initialState = {
    posts: []
}
const postsReducer = (state = initialState,action) => {
    switch (action.type) {
        case postsActionsTypes.SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}

export {postsReducer};