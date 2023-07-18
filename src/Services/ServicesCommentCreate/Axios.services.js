import axios from "axios";
import {baseURL} from "../../baseURL's/baseURL_comments/baseURL";


const axiosServices = {
    createPost: (object) => axios.post(baseURL,object)
}

export {axiosServices}