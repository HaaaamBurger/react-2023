import React, {useEffect, useState} from 'react';
import {fetchServices} from "../Services/fetch.services";
import {Car} from "../Car/Car";

const Cars = ({onSave,setOnSave}) => {
    const [cars,setCars] = useState([]);

    useEffect(() => {
       fetchServices.getCars().then(response => response.json()).then(data => setCars(data));
    },[onSave])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars,
};