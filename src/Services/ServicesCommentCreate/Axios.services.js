import axios from "axios";
import {baseURL} from "../../baseURL/baseURl";


const axiosServices = {
    createPost: (object) => axios.post(baseURL,object)
}

export {axiosServices}