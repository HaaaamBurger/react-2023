import React from 'react';

import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={styles.HeaderWrapper}>
            <NavLink to={'placeholder'}>Placeholder</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
            <NavLink to={'rickmorty'}>RickMorty</NavLink>
        </div>
    );
};

export {
    Header,
};