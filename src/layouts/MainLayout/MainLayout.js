import React from 'react';

import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div className={}>
                Hello World
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