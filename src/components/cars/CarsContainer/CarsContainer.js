import React, {useState} from 'react';
import {Cars} from "../Cars/Cars";
import {CarForm} from "../CarForm/CarForm";

const CarsContainer = () => {
    const [onSave,setOnSave] = useState(null);

    return (
        <div>
            <div>
                <CarForm setOnSave={setOnSave}/>
            </div>
            <hr/>
            <div>
                <Cars onSave={onSave}/>
            </div>
        </div>
    );
};

export {
    CarsContainer,
};