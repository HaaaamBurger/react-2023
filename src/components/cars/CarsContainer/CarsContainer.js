import React, {useState} from 'react';
import {Cars} from "../Cars/Cars";
import {CarForm} from "../CarForm/CarForm";

const CarsContainer = () => {
    const [onSave,setOnSave] = useState(null);
    const [getCar,setGetCar] = useState([]);

    return (
        <div>
            <div>
                <CarForm setOnSave={setOnSave} getCar={getCar}/>
            </div>
            <hr/>
            <div>
                <Cars onSave={onSave} setOnSave={setOnSave} setGetCar={setGetCar}/>
            </div>
        </div>
    );
};

export {
    CarsContainer,
};