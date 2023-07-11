import React from 'react';
import {SubChild21} from "./subchild2_1/SubChild2_1";
import {SubChild22} from "./subchild2_2/SubChild2_2";

const Child2 = ({setInfo}) => {

    return (
        <div>
            <SubChild21/>
            <SubChild22 setInfo={setInfo}/>
        </div>
    );
};

export {
    Child2,
};