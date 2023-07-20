import axios from "axios";
import {baseURL} from "../Constants/baseURL/baseURL";


const apiServices = axios.create({baseURL});

export {apiServices};