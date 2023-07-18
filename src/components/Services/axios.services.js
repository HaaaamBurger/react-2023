import axios from "axios";
import {BaseURl, links} from "../Index/Links";

const axiosServices = {
    getAll: () => axios.get(BaseURl + links.users),
    createUser: (user) => axios(BaseURl + links.users,{
        method: 'POST',
        body: JSON.stringify(user)
    }),
    headers : {'Content-type': 'application/json'}
}

export {axiosServices}