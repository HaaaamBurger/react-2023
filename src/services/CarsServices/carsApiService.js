import axios from "axios";
import {carsBaseURL} from "../../constants";

const carsApiService = axios.create({baseURL: carsBaseURL});

export {carsApiService}