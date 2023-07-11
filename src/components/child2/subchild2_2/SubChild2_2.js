import React, {useContext} from 'react';

const SubChild22 = ({setInfo}) => {
    ////Передача стейтом
    const info = 'React';
    console.log(info);
    setInfo(info);

    //Передача контекстом


    return (
        <div>

        </div>
    );
};

export {
    SubChild22,
};