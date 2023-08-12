import axios from "axios";
import {placeholderBaseURL} from "../../constants";

const placeholderApiService = axios.create({baseURL: placeholderBaseURL});

export {placeholderApiService};