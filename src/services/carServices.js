import {apiServices} from "./apiServices";
import {links} from "../constants";

const carServices = {
    getAll: () => apiServices.get(links.cars)
}

export {carServices};