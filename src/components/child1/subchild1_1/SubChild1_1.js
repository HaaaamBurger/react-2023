import {useContext} from "react";

import {InfoContext} from "../../../App";


const SubChild11 = () => {

    const mainInfo = useContext(InfoContext)
   console.log(mainInfo.info);

    return (
        <div>

        </div>
    );
};

export {
    SubChild11,
};