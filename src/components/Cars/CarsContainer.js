import React, {useState} from 'react';

import {CarsForm} from "./CarsForm/CarsForm";
import {Cars} from "./Cars/Cars";

const CarsContainer = () => {
    const [pingCars,setPingCars] = useState(null);
    const [updateCar,setUpdateCar] = useState([]);
    return (
        <div>
            <div>
                <CarsForm updateCar={updateCar} setPingCars={setPingCars} setUpdateCar={setUpdateCar}/>
            </div>
            <hr/>
            <div>
                <Cars pingCars={pingCars} setPingCars={setPingCars} setUpdateCar={setUpdateCar}/>
            </div>
        </div>
    );
};

export {
    CarsContainer,
};