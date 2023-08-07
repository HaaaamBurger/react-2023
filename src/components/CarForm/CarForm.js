import React from 'react';

import {useForm} from "react-hook-form";
import {carServices} from "../../services";

const CarForm = ({setTrigger}) => {
    const {
        formState: {isValid, errors},
        handleSubmit,
        register,
        reset
    } = useForm()

    const saveCar = (object) => {
        const newObject = {
            brand: object.brand,
            year: +object.year,
            price: +object.price
        }
        console.log(newObject)
        // carServices.create(newObject).then(() => {
        //     reset()
        // })

    }

    return (
        <form onSubmit={handleSubmit(saveCar)}>
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