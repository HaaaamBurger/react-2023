import React from 'react';

import styles from "./header.module.css"
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const navigation = useNavigate();


    return (
        <div className={styles.mainLayoutNav}>
            <div className={styles.mainLayoutLogo} onClick={() => {
                navigation('')
            }}>Yoru Films</div>
                <div className={styles.mainLayoutLinks}>
                    <NavLink to={''}>Main</NavLink>
                    <NavLink to={'/page/1'}>Films</NavLink>
                    <NavLink to={'/favourites'}>Favourites</NavLink>


                    <button onClick={() => {
                        const mainLayout = document.getElementsByClassName('layoutWrapper')[0];
                        mainLayout.classList.toggle(styles.blackTheme);

                        // let buttonSwitch = document.getElementsByClassName('switchButton')[0];
                        // buttonSwitch.classList.toggle(styles.switchTheme);
                        // console.log(buttonSwitch)
                    }} class={'switchButton'}></button>
                </div>

        </div>
    );

};

export {
    Header,
};