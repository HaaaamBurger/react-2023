import {ShowCars} from "../showCars/ShowCars";
import {Form} from "../form/Form";
import {UpdateCar} from "../update/UpdateCar";
import {useState} from "react";


const Cars = () => {

    return (
        <div>
            <div>
                <Form/>
            </div>
            <hr/>
            <div>
                <UpdateCar/>
            </div>
            <hr/>
            <div>
                <ShowCars/>
            </div>
        </div>
    );
};

export {
    Cars,
};