import React from 'react';
import {useToggle} from "./useToggle";

const ToggleComponent = () => {

    const status = false;
    const result = useToggle(status);

    console.log(result)

    return (
        <div>

        </div>
    );
};

export {
    ToggleComponent,
};