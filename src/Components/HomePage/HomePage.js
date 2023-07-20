import React from 'react';

import styles from './homePage.module.css'
import {Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div className={styles.wrapper}></div>
            <Outlet/>
        </div>
    );
};

export {
    HomePage,
};