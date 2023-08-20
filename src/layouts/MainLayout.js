import React from 'react';
import {CarForm} from "../components/CarForm";
import {Cars} from "../components/Cars";

const MainLayout = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {
    MainLayout,
};