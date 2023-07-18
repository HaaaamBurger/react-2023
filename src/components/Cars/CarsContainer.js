import React, {useState} from 'react';

import {CarsForm} from "./CarsForm/CarsForm";
import {Cars} from "./Cars/Cars";

const CarsContainer = () => {
    const [pingCars,setPingCars] = useState(null);

    return (
        <div>
            <div>
                <CarsForm/>
            </div>
            <hr/>
            <div>
                <Cars pingCars={pingCars} setPingCars={setPingCars}/>
            </div>
        </div>
    );
};

export {
    CarsContainer,
};