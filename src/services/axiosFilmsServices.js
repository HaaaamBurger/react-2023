import {apiServices} from "./apiServices";
import {links} from "../constants/baseURL";

const axiosFilmsServices = {
    getAll: () => apiServices.get(links.movies)
}

export {axiosFilmsServices}