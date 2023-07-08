import React, {useEffect, useState} from 'react';
import {Launch} from "./launch";
import {FetchServices} from "../services/fetch.services";

const Launches = () => {
    const [launch,setLaunch] = useState([]);

    useEffect(() => {
        FetchServices.getLaunches().then(response => response.json()).then(data => setLaunch(data));
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