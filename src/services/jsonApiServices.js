import axios from "axios";
import {baseURL} from "../constants";

const jsonApiServices = axios.create({baseURL});

export {jsonApiServices};