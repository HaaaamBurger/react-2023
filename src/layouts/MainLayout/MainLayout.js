import React from 'react';

import {NavLink, Outlet} from "react-router-dom";
import styles from './mainLayout.module.css'

const MainLayout = () => {
    return (
        <div className={styles.mainLayoutWrapper}>
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
            <div className={styles.mainLayoutOutlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout,
};