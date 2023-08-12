import React from 'react';
import {CarsForm, CarsOwu} from "../../components/CarsMain";


const Cars = () => {
    return (
        <div>
            <CarsForm/>
            <hr/>
            <CarsOwu/>
        </div>
    );
};

export {
    Cars,
};