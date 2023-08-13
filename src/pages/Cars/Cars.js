import React from 'react';

import {CarsForm, CarsOwu} from "../../components/CarsMain";
import styles from './Cars.module.css';

const Cars = () => {
    return (
        <div className={styles.CarsWrapper}>
            <CarsForm/>
            <hr/>
            <CarsOwu/>
        </div>
    );
};

export {
    Cars,
};