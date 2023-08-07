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
        console.log(object)
        // carServices.create(object).then(() => {
        //     reset()
        // })

    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveCar)}>
                {/*<input type="text" placeholder={'brand'} {...register('brand')}/>*/}
                <input type="number" placeholder={'year'} {...register('year')}/>
                {/*<input type="number" placeholder={'price'} {...register('price')}/>*/}
                <button disabled={!isValid}>Add</button>
            </form>
        </div>
    );
};

export {
    CarForm,
};