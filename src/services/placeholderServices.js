import {apiService} from "./apiService";
import {links} from "../constants/urls";

const placeholderServices = {
    getPosts: () => apiService(links.posts),
    getAlbums: () => apiService(links.albums),
    getComments: () => apiService(links.comments)
}

export {placeholderServices};