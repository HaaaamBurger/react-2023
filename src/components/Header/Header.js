import React from 'react';

import styles from "./header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.mainLayoutNav}>
            <div className={styles.mainLayoutLogo}>Yoru Films</div>
                <div className={styles.mainLayoutLinks}>
                    <NavLink to={''}>Main</NavLink>
                    <NavLink to={'/films'}>Films</NavLink>
                </div>
        </div>
    );
};

export {
    Header,
};