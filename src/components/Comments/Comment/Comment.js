import React from 'react';

import styles from './comment.module.css'
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {id,email,name,body} = comment;
    return (
        <div className={styles.commentWrapper} onClick={() => {
            window.location.href = `/comments/post/${id}`
        }}>
            <div>Id: {id}</div>
            <div>Name: {name}.</div>
            <div>Email: {email}.</div>
            <div>Body: {body}.</div>
        </div>
    );
};

export {
    Comment,
};