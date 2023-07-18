import React from 'react';
import {useForm} from "react-hook-form";
import {axiosServices} from "../../Services/ServicesCommentCreate/Axios.services";


const CreateComment = () => {

    const {
        reset,
        register,
        handleSubmit,
        formState: {errors,isValid}
    } = useForm({
        mode: 'all'
    });

    const save = (object) => {
        axiosServices.createPost(object).then(response => console.log(response.data));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name',{
                required: 'Required!',
                minLength: {value: 2, message:'Name min 2 characters!'},
                maxLength: {value: 15, message: 'Name max 2 characters!'},
            })}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'email'} {...register('email',{
                required: 'Required!',
                pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:' Wrong validation!'}
            })}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type="text" placeholder={'body'} {...register('body',{
                required: 'Required!',
                minLength: {value: 1,message: 'Min 1!'},
                maxLength: {value: 25, message: 'Max 25!'}
            })}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>Create</button>
        </form>
    );
};

export {
    CreateComment,
};