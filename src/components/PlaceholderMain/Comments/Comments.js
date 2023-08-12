import React, {useEffect} from 'react';

import styles from './Comments.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../../redux";
import {Comment} from "./Comment";

const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(store => store.commentsReducer.comments);

    useEffect(() => {
        dispatch(getComments())
    },[])

    console.log(comments)

    return (
        <div className={styles.CommentsWrapper}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {
    Comments,
};