import React from 'react';

import {Outlet} from "react-router-dom";
import {Header} from "../../components/Header";


const MainLayout = () => {
    return (
        <div class={'layoutWrapper'}>
            <div>
                <Header/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout,
};