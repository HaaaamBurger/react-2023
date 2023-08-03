import {useState} from "react";

const useArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue);

    const add = (item) => {
        setArray(prevArray => [...prevArray, item]);
    };

    const remove = (id) => {
        setArray(prevArray => prevArray.filter((_, index) => index !== id));
    };

    return {array, add, remove};
};

export {
    useArray,
};