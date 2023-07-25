import React from 'react';

import {Outlet} from "react-router-dom";
import styles from './mainLayout.module.css'
import {Header} from "../../components/Header/Header";

const MainLayout = () => {
    return (
        <div style={{backgroundColor: '#282c34'}}>
                <Header/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout,
};