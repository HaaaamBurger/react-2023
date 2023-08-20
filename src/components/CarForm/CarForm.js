import React from 'react';
import {useForm} from "react-hook-form";
import {carActions} from "../../redux";
import {useDispatch, useSelector} from "react-redux";

const CarForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars)

    const {
        handleSubmit,
        register,
        formState: {isValid},
        reset,
        setValue
    } = useForm()

    if (carForUpdate) {
        setValue('brand',carForUpdate.brand)
        setValue('price',carForUpdate.price)
        setValue('year',carForUpdate.year)
    }

    const save = async (car) => {
        await dispatch(carActions.create({car}));
        reset();
    }

    const update = (car) => {
        dispatch(carActions.update({id: carForUpdate.id, car}))
    }

    return (
        <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="number" placeholder={'price'} {...register('price')}/>
            <input type="number" placeholder={'year'} {...register('year')}/>
            <button>{!carForUpdate ? 'Create' : 'Update'}</button>
        </form>
    );
};

export {
    CarForm,
};