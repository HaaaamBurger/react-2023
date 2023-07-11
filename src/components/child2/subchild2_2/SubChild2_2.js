import {useContext} from "react";

import {InfoContext} from "../../../App";


const SubChild22 = () => {

    const mainInfo = useContext(InfoContext);
    const info = 'React';
    mainInfo.setInfo(info);
    return (
        <div>

        </div>
    );
};

export {
    SubChild22,
};