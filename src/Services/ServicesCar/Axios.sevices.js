import axios from "axios";

import {baseURL} from "../../baseURL\'s/baseURL_cars/baseURl";
import {links} from "../../components/Cars/Index/Links";

const axiosServices = {
    getCars: () => axios.get(baseURL + links.cars),
    createCar: (car) => axios.post(baseURL + links.cars, car),
    deleteCar: (id) => axios.delete(baseURL + links.cars + '/' + id),
    updateCar: (id,object) => axios.put(baseURL + links.cars + '/' + id, object)
}

export {axiosServices};