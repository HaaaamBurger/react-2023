import React from 'react';
import styles from "../../layouts/MainLayout/mainLayout.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.mainLayoutNav}>
            <div className={styles.mainLayoutLogo}>
                <p>Yoru Films</p>
            </div>

            <div className={styles.mainLayoutHr}></div>

            <div className={styles.mainLayoutLinks}>
                <NavLink to={''}>Home</NavLink>
                <NavLink to={'/films'}>Films</NavLink>
            </div>

            <div className={styles.mainLayoutHr}></div>

        </div>
    );
};

export {
    Header,
};