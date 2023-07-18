import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {axiosServices} from "../../../Services/ServicesCar/Axios.sevices";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidation} from "../carValidation/CarValidation";


const CarsForm = ({updateCar,setPingCars,setUpdateCar}) => {

    const {
        reset,
        register,
        handleSubmit,
        setValue,
        formState: {isValid,errors}
    } = useForm({
        mode: 'all',
        resolver: joiResolver(carValidation)
    });

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
                reset();
                setUpdateCar(null);
            })
        } else {
            axiosServices.createCar(object).then(response => {
                setPingCars(prev => !prev);
            });
            reset();
        }

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="number" placeholder={'price'} {...register('price',{required:true})}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="number" placeholder={'year'} {...register('year',{required:true})}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{!updateCar ? 'Add' : 'Update'}</button>
        </form>
    );
};

export {
    CarsForm,
};