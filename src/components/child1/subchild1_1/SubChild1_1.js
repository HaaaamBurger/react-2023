import {useContext} from "react";

import {InfoContext} from "../../../App";


const SubChild11 = ({info}) => {

    //Передача стейтом
    console.log(info);

    const mainInfo = useContext(InfoContext);
    console.log(mainInfo);
    return (
        <div>

        </div>
    );
};

export {
    SubChild11,
};