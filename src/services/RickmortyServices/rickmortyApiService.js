import axios from "axios";
import {rickmortyBaseURL} from "../../constants";

const rickmortyApiService = axios.create({baseURL:rickmortyBaseURL});

export {rickmortyApiService};