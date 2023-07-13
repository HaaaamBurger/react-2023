import React, {useEffect, useState} from 'react';

import {Car} from "./Car";

const ShowCars = () => {
    const [cars, setCars] = useState([]);


    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(response => response.json())
            .then(data => setCars(data))
    },[])
    console.log(cars);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    ShowCars,
};