import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {axiosServices} from "../../../Services/ServicesUserCreate/axios.services";

const UserForm = () => {

    const [success,setSuccess] = useState(null);

    const {
        register,
        handleSubmit,
        reset

    } = useForm();

    const save = (object) => {
        axiosServices.createUser(object).then(response => {
            console.log(response.data);
        });
        reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <label><input type="text" placeholder={'name'} {...register('name', {min: 1,required:true})}/></label>
            <label><input type="text" placeholder={'username'} {...register('username', {min:1,required:true})}/></label>
            <button>Add</button>

        </form>
    );
};

export {
    UserForm,
};