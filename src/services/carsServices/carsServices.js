import {carsApiServices} from "./carsApiServices";
import {carLinks} from "../../constants";

const carsServices = {
    getAll: () => carsApiServices(carLinks.cars)
}

export {carsServices};