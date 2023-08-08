import React, {useEffect} from 'react';
import {placeholderServices} from "../../services/placeholderServices";
import {commentsActions} from "../../redux/actions/commentsActions";
import {useDispatch, useSelector} from "react-redux";
import {Comment} from "./Comment/Comment";

const Comments = () => {
    const commentsDispatch = useDispatch();
    const comments = useSelector(store => store.commentsReducer.comments);

    useEffect(() => {
        placeholderServices.getComments().then(({data}) => commentsDispatch(commentsActions.setAll(data)))
    },[])


    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {
    Comments,
};