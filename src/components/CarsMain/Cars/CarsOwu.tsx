import {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType, Cars, carsAxiosMethods} from "../../../redux";
import {CarOwu} from "./Car";

const CarsOwu = () => {
    const cars: Cars[] | [] = useSelector((store: AppStateType) => store.carsReducer.cars);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
       dispatch(carsAxiosMethods.getCars());
    },[]);

    return (
        <div>
            {cars.map((car: Cars) => <CarOwu key={car.id} car={car}/>)}
        </div>
    )
};

export {
    CarsOwu,
};