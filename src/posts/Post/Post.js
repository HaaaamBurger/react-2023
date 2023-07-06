import React from 'react';
import styles from './Post.module.css'

const Post = ({post,infoHandler}) => {
    const {id,title} = post;
    return (
        <div className={styles.postWrapper}>
            <h2>Id: {id}</h2>
            <h3>Title: {title}</h3>
            <button onClick={()=>infoHandler(post)}>Info</button>
        </div>
    )
};

export {
    Post,
};