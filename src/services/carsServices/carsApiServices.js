import axios, {create} from "axios";
import {carsURL} from "../../constants";

const carsApiServices = axios.create({baseURL: carsURL});

export {carsApiServices};