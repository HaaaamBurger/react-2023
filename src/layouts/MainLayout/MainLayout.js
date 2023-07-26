import React from 'react';

import {Outlet} from "react-router-dom";
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