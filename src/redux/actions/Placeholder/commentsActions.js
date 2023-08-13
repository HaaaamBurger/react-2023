import {placeholderService} from "../../../services";


const commentsActionsTypes = {
    SET_COMMENTS: 'SET_COMMENTS'
}

const commentsActions = {
    setAll: (data) => ({type: commentsActionsTypes.SET_COMMENTS, payload: data})
};

const getComments = () => async(dispatch) => {
    const {data} = await placeholderService.getComments();
    dispatch(commentsActions.setAll(data));
}


export {commentsActionsTypes,getComments};