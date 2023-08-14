import {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {carsAxiosMethods} from "../../../redux";
import {CarOwu} from "./Car";

const CarsOwu = () => {
    const cars = useSelector(store => store.carsReducer.cars);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(carsAxiosMethods.getCars());
    },[])

    return (
        <div>
            {cars.map(car => <CarOwu key={car.id} car={car}/>)}
        </div>
    );
};

export {
    CarsOwu,
};