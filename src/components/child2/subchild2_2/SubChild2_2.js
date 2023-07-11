import {useContext} from "react";

import {InfoContext} from "../../../App";


const SubChild22 = ({setInfo}) => {
    ////Передача стейтом
    const info = 'React';
    console.log(info);
    setInfo(info);

    //Передача контекстом
    const mainInfo = useContext(InfoContext);
    console.log(mainInfo);

    return (
        <div>

        </div>
    );
};

export {
    SubChild22,
};