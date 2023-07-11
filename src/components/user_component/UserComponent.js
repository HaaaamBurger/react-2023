import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";

const UserComponent = ({user,setUser}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchServices.getPosts(user.id).then(response => response.json()).then(data => setPosts(data));
    },[])

    return (
        <div>
            <h2>{user.id} : {user.name}</h2>
            <button onClick={() => {setUser(posts)}}>Show Posts</button>
        </div>
    );
};

export {
    UserComponent,
};