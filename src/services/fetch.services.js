import {BaseURL, links} from "../links/BaseURL";

const fetchServices = {
    getUsers: () => fetch(BaseURL + links.users),
    getPosts: (id) => fetch(BaseURL + links.users + '/' + id  + links.posts),
}

export {fetchServices}