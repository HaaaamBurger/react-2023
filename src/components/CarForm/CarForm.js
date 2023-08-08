import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {carServices} from "../../services";

const CarForm = ({setTrigger,carForUpdate}) => {
    const {
        formState: {isValid, errors},
        handleSubmit,
        register,
        reset,
        setValue

    } = useForm()

    useEffect(() => {
        console.log(carForUpdate)
        if (carForUpdate) {
            setValue('brand',carForUpdate.brand);
            setValue('year',carForUpdate.year);
            setValue('price',carForUpdate.price);
        }
    },[carForUpdate])


    const updateCar = (car) => {
        carServices.updateById(car.id).then(() => {

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
            <input type="text" {...register('brand')}/>
            <input type="number" {...register('year')}/>
            <input type="number" {...register('price')}/>
            <button disabled={!isValid}>Add</button>
        </form>
    );
};

export {
    CarForm,
};