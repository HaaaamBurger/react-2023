import axios from "axios";
import {jsonURL} from "../../constants";

const jsonApiServices = axios.create({baseURL: jsonURL});

export {jsonApiServices};