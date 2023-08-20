import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {

    const {
        reset,
        formState: {isValid},
        register,
        handleSubmit
    } = useForm();

    const save = (car) => {

    }

    const update = () => {

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="number" placeholder={'price'} {...register('price')}/>
            <input type="number" placeholder={'year'} {...register('year')}/>
            <button>Submit</button>
        </form>
    );
};

export {
    CarForm,
};