import React from 'react';

import styles from './User.module.css';

const User = ({user,postsHandler}) => {
    return (
        <div className={styles.user_wrapper}>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <button onClick={() => postsHandler(user.id)}>Posts</button>
        </div>
    );
};

export {
    User,
};