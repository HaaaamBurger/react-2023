import React from 'react';
import {Cars} from "../../components/Cars";
import {CarForm} from "../../components/CarForm/CarForm";

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