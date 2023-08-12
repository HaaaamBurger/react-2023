import React from 'react';

import styles from './Post.module.css';

const Post = ({post}) => {
    const {id,title,body} = post;

    return (
        <div className={styles.PostWrapper}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {
    Post,
};