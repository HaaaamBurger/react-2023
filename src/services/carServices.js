import {apiServices} from "./apiServices";
import {links} from "../constants";

const carServices = {
    getAll: () => apiServices.get(links.cars),
    create: (car) => apiServices.post(links.cars, car),
    deleteById: (id) => apiServices.delete(links.cars + '/' + id),
    updateById: (id,car) => apiServices.put(links.cars + '/' + id, car)
}

export {carServices};