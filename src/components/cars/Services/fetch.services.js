import {BaseURL, links} from "../Links/Links";

const fetchServices = {
    getCars: () => fetch(BaseURL + links.cars),
}

export {fetchServices}