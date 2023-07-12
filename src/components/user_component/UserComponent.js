import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";

const UserComponent = ({user,setUserId}) => {

    return (
        <div>
            <h2>{user.id} : {user.name}</h2>
            <button onClick={() => {setUserId(user.id)}}>Show Posts</button>
        </div>
    );
};

export {
    UserComponent,
};