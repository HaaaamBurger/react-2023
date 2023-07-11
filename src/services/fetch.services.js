import {BaseURL, links} from "../links/BaseURL";

const fetchServices = {
    getUsers: () => fetch(BaseURL + links.users),
}

export {fetchServices};