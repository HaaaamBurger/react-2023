import React from 'react';

import styles from './user.module.css'
import {UserDetails} from "../userdetails/UserDetails";
import {UserAddress} from "../useraddress/UserAddress";
import {Company} from "../company/Company";

const Users = ({user}) => {
    return (
        <div className={styles.userWrapper}>
            <UserDetails data={user}/>
            <UserAddress data={user}/>
            <Company data={user}/>
        </div>
    );
};

export {
    Users,
};