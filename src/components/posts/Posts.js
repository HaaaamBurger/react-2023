import React from 'react';

import styles from './Posts.module.css'

const Posts = ({posts}) => {
    return (
        <div className={styles.posts_wrapper}>
            <p>UserID: {posts.userId} - ID: {posts.id}</p>
            <p>Title: {posts.title}</p>
        </div>
    );
};

export {
    Posts,
};