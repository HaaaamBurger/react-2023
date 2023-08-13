import {carsApiService} from "./carsApiService";
import {carsUrls} from "../../constants";

const carsService = {
    getAll: () => carsApiService.get(carsUrls.cars),
    deleteById: (id) => carsApiService.delete(carsUrls.deleteCar(id)),
    updateById: (id,car) => carsApiService.put(carsUrls.updateCar(id), car),
    createCar: (car) => carsApiService.post(carsUrls.cars, car)
}

export {carsService};