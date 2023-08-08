import React, {useState} from 'react';
import {Cars} from "../../components/Cars";
import {CarForm} from "../../components/CarForm/CarForm";

const MainLayout = () => {
    const [trigger,setTrigger] = useState(null);
    const [carForUpdate,setCarForUpdate] = useState(null);

    return (
        <div>
          <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate}/>
          <hr/>
          <Cars trigger={trigger} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {
    MainLayout,
};