import React from 'react';

import {Posts} from "../components/Posts";
import {Comments} from "../components/Comments";
import {Cars} from "../components/Cars";


const BaseLayout = () => {
    return (
        <div>
            {/*<Posts/>*/}
            {/*<Comments/>*/}
            <Cars/>
        </div>
    );
};

export {
    BaseLayout,
};