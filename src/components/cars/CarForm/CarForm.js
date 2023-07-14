import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = ({setOnSave}) => {

    const {register,handleSubmit,reset,formState: {errors,isValid},setValue} = useForm();



    const save = (data) => {



        fetch('http://owu.linkpc.net/carsAPI/v1/cars',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        }).then(response => response.json()).then(() => {
            setOnSave(prev => !prev);
            reset();
        });
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <label>Create car:</label>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Create</button>
        </form>
    );
};

export {
    CarForm,
};