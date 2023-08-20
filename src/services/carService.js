import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => apiService.get(urls.cars),
    deleteById: (id) => apiService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => apiService.put(`${urls.cars}/${id}`, car),
    create: (car) => apiService.post(urls.cars, car)
}

export {carService};