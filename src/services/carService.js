import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll: () => apiService(urls.cars),
    create: (car) => apiService.post(urls.cars, car),
    updateById: (id, car) => apiService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => apiService.delete(`${urls.cars}/${id}`)
}

export {carService};