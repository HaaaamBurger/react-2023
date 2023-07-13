import React from 'react';

import style from './Car.module.css';

const Car = ({car}) => {
    const handleDelete = (id) => {
        try{
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
        }catch (e){
            console.log(e);
        }
    }


    const {id,brand,price,year} = car;
    return (
        <div className={style.carWrapper}>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <div>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <button>Update</button>
            </div>
        </div>
    );
};

export {
    Car,
};