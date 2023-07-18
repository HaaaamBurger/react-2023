import axios from "axios";

import {links} from "../../components/CreateUser/Index/Links";
import {baseURL} from "../../baseURL\'s/baseURL_users/baseURL";



const axiosServices = {
    createUser: (user) =>  axios.post(baseURL + links.users, user)
}

export {axiosServices}