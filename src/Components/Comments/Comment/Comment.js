import React from 'react';

import styles from './comment.module.css'

const Comment = ({comment,setPostId}) => {
    const {id,email,name,body} = comment;
    return (
        <div className={styles.commentWrapper} onClick={() => setPostId(id)}>
            <div>Id: {id}</div>
            <div>Email: {email}.</div>
            <div>Name: {name}.</div>
            <div>Body: {body}.</div>
        </div>
    );
};

export {
    Comment,
};