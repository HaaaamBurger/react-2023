import axios from "axios";

import {baseURL} from "../../baseURL/baseURl";
import {links} from "../../components/CreateUser/Index/Links";


const axiosServices = {
    createUser: (user) =>  axios.post(baseURL + links.users, user)
}

export {axiosServices}