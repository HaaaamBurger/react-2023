import axios from "axios";
import {baseURL} from "../Index/Links";

const axiosServices = {
    createPost: (object) => axios.post(baseURL,object)
}

export {axiosServices}