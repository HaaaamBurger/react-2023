import {apiServices} from "./apiServices";
import {links} from "../constants/baseURL";

const axiosFilmsServices = {
    getAll: (page) => apiServices.get(links.movies(page))
}

export {axiosFilmsServices}