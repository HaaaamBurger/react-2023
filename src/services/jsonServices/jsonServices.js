import {jsonApiServices} from "./jsonApiServices";
import {jsonLinks} from "../../constants";

const jsonServices = {
    getPosts: () => jsonApiServices.get(jsonLinks.posts),
    getComments: () => jsonApiServices.get(jsonLinks.comments)
}

export {jsonServices};