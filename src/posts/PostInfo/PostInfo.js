import React from 'react';
import styles from './PostInfo.module.css'

const PostInfo = (props) => {
    const {info} = props;
    return (
        <div className={styles.potsInfo}>
            <h3>Id: {info.id}</h3>
            <p>Body: {info.body}</p>
            <p>title: {info.title}</p>
            <p>UserId: {info.userId}</p>
        </div>
    );
};

export {
    PostInfo,
};