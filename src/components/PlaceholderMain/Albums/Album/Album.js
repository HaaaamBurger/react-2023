import React from 'react';

import styles from './Album.module.css';

const Album = ({album}) => {
    const {id,userId,title} = album;

    return (
        <div className={styles.AlbumWrapper}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {
    Album,
};