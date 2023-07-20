import React from 'react';

import styles from './comment.module.css'


const Comment = ({comment,setPostId}) => {
    const {id,email,name,body} = comment;
    return (
        <div className={styles.commentWrapper}>
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