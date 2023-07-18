import axios from "axios";
import {BaseURl, links} from "../Index/Links";

const axiosServices = {
    createUser: (user) =>  axios.post(BaseURl + links.users, user)
}

export {axiosServices}