import React, {useState} from 'react';
import {Cars} from "../../components/Cars";
import {CarForm} from "../../components/CarForm/CarForm";

const MainLayout = () => {
    const [trigger,setTrigger] = useState(null);

    return (
        <div>
          <CarForm setTrigger={setTrigger}/>
          <hr/>
          <Cars trigger={trigger}/>
        </div>
    );
};

export {
    MainLayout,
};