import React, {useEffect, useState} from 'react';
import {Launch} from "./launch";

const Launches = () => {
    const [launch,setLaunch] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(data => setLaunch(data));
    },[])

    return (
        <div>
            {launch.map(value => <Launch launch={value}/>)}
        </div>
    )
};

export {
    Launches,
};