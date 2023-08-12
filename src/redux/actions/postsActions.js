import {placeholderService} from "../../services";

const postsActionsTypes = {
    SET_POSTS: 'SET_POSTS'
}

const postsActions = {
    setAll: (data) => ({type: postsActionsTypes.SET_POSTS, payload: data})
}

const getPosts = async () => (dispatch) => {
    placeholderService.getPosts().then(({data}) => dispatch(postsActions.setAll(data)))
}

export {postsActions,postsActionsTypes,getPosts};