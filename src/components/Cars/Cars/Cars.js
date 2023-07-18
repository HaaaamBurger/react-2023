import React, {useEffect, useState} from 'react';

import {Car} from "../Car/Car";
import {axiosServices} from "../../../Services/ServicesCar/Axios.sevices";

const Cars = ({pingCars,setPingCars,setUpdateCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
       axiosServices.getCars().then(response => setCars(response.data));
    },[pingCars])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setPingCars={setPingCars} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};

export {
    Cars,
};