import React from 'react';

const CarsForm = () => {
    return (
        <form>
            <input type="text" placeholder={'brand'}/>
            <input type="number" placeholder={'price'}/>
            <input type="number" placeholder={'year'}/>
            <button>Add</button>
        </form>
    );
};

export {
    CarsForm,
};