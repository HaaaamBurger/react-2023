import React, {useEffect, useState} from 'react';
import {fetchServices} from "../services/Fetch.services";

const Cars = () => {
    const [cars, setCars] = useState([]);

    fetch('owu.linkpc.net/carsAPI/v1/cars')
        .then(response => console.log(response))

    return (
        <div>

        </div>
    );
};

export {
    Cars,
};