import React from 'react';

import styles from './Comment.module.css'

const Comment = ({comment}) => {
    const {id,name,body,email} = comment;

    return (
        <div className={styles.CommentWrapper}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>body: {body}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {
    Comment,
};