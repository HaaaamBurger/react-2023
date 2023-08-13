import {commentsActionsTypes} from "../../actions";

const initialState = {
    comments: []
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentsActionsTypes.SET_COMMENTS:
            return{
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}

export {commentsReducer};