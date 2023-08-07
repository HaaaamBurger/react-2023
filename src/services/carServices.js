import {apiServices} from "./apiServices";
import {links} from "../constants";

const carServices = {
    getAll: () => apiServices.get(links.cars),
    create: (car) => apiServices.create(links.cars, car),
    deleteById: (id) => apiServices.delete(links.cars),
    updateById: (id) => apiServices.put(links.cars)
}

export {carServices};