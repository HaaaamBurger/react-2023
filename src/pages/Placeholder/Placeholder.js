import React from 'react';

import {Outlet} from "react-router-dom";
import {PlaceholderHeader} from "../../components";

const Placeholder = () => {
    return (
        <div>
            <PlaceholderHeader/>
            <Outlet/>
        </div>
    );
};

export {
    Placeholder,
};