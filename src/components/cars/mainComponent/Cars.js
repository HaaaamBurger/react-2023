import React, {useEffect, useState} from 'react';
import {fetchServices} from "../services/Fetch.services";

const Cars = () => {
    const [cars, setCars] = useState([]);

    fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then(response => response.json())
        .then(data => console.log(data))
    return (
        <div>

        </div>
    );
};

export {
    Cars,
};