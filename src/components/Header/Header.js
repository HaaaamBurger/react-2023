import React from 'react';

import styles from "./header.module.css"
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const navigation = useNavigate();

    return (
        <div className={styles.mainLayoutNav}>
            <div className={styles.mainLayoutLogo} onClick={() => {
                navigation('')
            }}>Yoru Films</div>
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