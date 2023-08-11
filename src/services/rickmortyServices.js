import {apiServices} from "./apiServices";
import {links} from "../constants";

const rickmortyServices = {
    getById: (id) => apiServices.get(links.character + '/' + '?page=' + id)
}

export {rickmortyServices};