import React from 'react';
import {useForm} from "react-hook-form";
import {axiosServices} from "../../../Services/ServicesUserCreate/axios.services";


const UserForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors,isValid}

    } = useForm({
        mode: 'all'
    });
    console.log(errors);

    const save = (object) => {
        axiosServices.createUser(object).then(response => {
            console.log(response.data);
        });
        reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <label><input type="text" placeholder={'name'} {...register('name', {
                required: 'Required',
                minLength: {value: 2,message: 'Min 2!'},
                maxLength: {value: 12, message: 'Max 12!'}
            })}/></label>
            {errors.name && <span>{errors.name.message}</span>}

            <label><input type="text" placeholder={'username'} {...register('username', {
                required: 'Required!',
                minLength: {value: 2,message: 'Min 2!'},
                maxLength: {value: 12, message: 'Max 12!'}
            })}/></label>
            {errors.username && <span>{errors.username.message}</span>}

            <button disabled={!isValid}>Add</button>

        </form>
    );
};

export {
    UserForm,
};