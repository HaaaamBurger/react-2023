import React, {useEffect, useState} from 'react';

import {useArray} from "./useArray";

const ArrayComponent = () => {

   const { array, add, remove } = useArray(['item1', 'item2', 'item3']);
   useEffect(() => {
        add('test');
        remove(0);
   },[])

    console.log(array);

    return (
        <div>

        </div>
    );
};

export {
    ArrayComponent,
};