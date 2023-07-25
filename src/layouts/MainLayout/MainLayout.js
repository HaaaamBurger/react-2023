import React from 'react';

import {NavLink, Outlet} from "react-router-dom";
import styles from './mainLayout.module.css'
import {Header} from "../../components/Header/Header";

const MainLayout = () => {
    return (
        <div className={styles.mainLayoutWrapper}>
                <Header/>
            <div className={styles.mainLayoutOutlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout,
};