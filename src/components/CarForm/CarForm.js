import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {carServices} from "../../services";
import {useSelector} from "react-redux";

const CarForm = ({setTrigger,carForUpdate,setCarForUpdate}) => {
    const {
        formState: {isValid, errors},
        handleSubmit,
        register,
        reset,
        setValue

    } = useForm()

    const cars = useSelector(store => store.carsReducer.cars);

    useEffect(() => {
        if (carForUpdate) {
            const getCar = cars.find(car => car.id === carForUpdate ? {brand: car.brand, year: car.year, price: car.price} : null);
            setValue('brand',getCar.brand);
            setValue('year',getCar.year);
            setValue('price',getCar.price);
        }
    },[carForUpdate])

    const updateCar = (car) => {
        carServices.updateById(carForUpdate,car).then(() => {
            setTrigger(prevState => !prevState);
            reset();
            setCarForUpdate(null);
        })
    }

    const saveCar = (object) => {
        carServices.create(object).then(() => {
            setTrigger(prevState => !prevState)
            reset()
        })
    }

    return (
        <form onSubmit={handleSubmit(!carForUpdate ? saveCar : updateCar)}>
            <input type="text" {...register('brand')} placeholder={'brand'}/>
            <input type="number" {...register('year')} placeholder={'year'}/>
            <input type="number" {...register('price')} placeholder={'price'}/>
            <button disabled={!isValid}>{!carForUpdate ? 'Add' : 'Update'}</button>
        </form>
    );
};

export {
    CarForm,
};