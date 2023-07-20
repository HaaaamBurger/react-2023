import {apiServices} from "./apiServices";
import {links} from "../Constants/baseURL";

const axiosServices = {
    getTodos: () => apiServices.get(links.todos),
    getAlbums: () => apiServices.get(links.albums),
    getComments: () => apiServices.get(links.comments),
}

export {axiosServices};