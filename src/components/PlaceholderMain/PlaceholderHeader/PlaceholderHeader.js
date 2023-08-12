import React from 'react';

import {NavLink} from "react-router-dom";
import styles from './PlaceholderHeader.module.css';

const PlaceholderHeader = () => {
    return (
        <div className={styles.PlaceholderHeaderWrapper}>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
        </div>
    );
};

export {
    PlaceholderHeader,
};