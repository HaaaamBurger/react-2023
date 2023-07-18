import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {axiosServices} from "../Services/Axios.sevices";

const CarsForm = ({updateCar,setPingCars}) => {

    const {
        reset,
        register,
        handleSubmit,
        setValue
    } = useForm();

    useEffect(() => {
        if (updateCar) {
            setValue('brand',updateCar.brand,{shouldValidate:true});
            setValue('price',updateCar.price,{shouldValidate:true});
            setValue('year',updateCar.year,{shouldValidate:true});
        }
    },[updateCar])



    const save = (object) => {
        if (updateCar) {
            axiosServices.updateCar(updateCar.id,object).then(() => {
                setPingCars(prev => !prev);
                // updateCar = null;
            })
        }

        axiosServices.createCar(object).then(response => {
            setPingCars(prev => !prev);
        });
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="number" placeholder={'price'} {...register('price')}/>
            <input type="number" placeholder={'year'} {...register('year')}/>
            <button>{!updateCar ? 'Add' : 'Update'}</button>
        </form>
    );
};

export {
    CarsForm,
};