import axios from "axios";
import {baseURL, links} from "../Index/Links";

const axiosServices = {
    getCars: () => axios.get(baseURL + links.cars),
    createCar: (car) => axios.post(baseURL + links.cars, car),
    deleteCar: (id) => axios.delete(baseURL + links.cars + '/' + id),
    updateCar: (id,object) => axios.put(baseURL + links.cars + '/' + id, object)
}

export {axiosServices};