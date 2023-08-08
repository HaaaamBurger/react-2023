import React from 'react';

import headerStyle from './header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={headerStyle.headerWrapper}>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
        </div>
    );
};

export {
    Header,
};