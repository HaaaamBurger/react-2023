import React, {useState} from 'react';

import {useArray} from "./useArray";

const ArrayComponent = () => {
    const [data,setData] = useState([]);

    useArray(data);

    return (
        <div>

        </div>
    );
};

export {
    ArrayComponent,
};