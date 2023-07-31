import {jsonApiServices} from "./jsonApiServices";
import {links} from "../constants";

const jsonServices = {
    getPosts: () => jsonApiServices.get(links.posts),
    getComments: () => jsonApiServices.get(links.comments)
}

export {jsonServices};