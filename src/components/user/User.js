import React from 'react';

import styles from './user.module.css'
import {UserDetails} from "../userdetails/UserDetails";
import {UserAddress} from "../useraddress/UserAddress";
import {Company} from "../company/Company";
const User = ({user}) => {
    
    return (
        <div>
            <div className={styles.userWrapper}>
                <UserDetails data={user}/>
                <UserAddress data={user}/>
                <Company data={user}/>
            </div>
        </div>
    );
};

export default User;