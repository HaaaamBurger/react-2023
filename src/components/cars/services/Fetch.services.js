import {BaseURl, links} from "../index/Links";

const fetchServices = {
    getCars: () => fetch(BaseURl + links.cars).then(response => response.json()),
}

export {fetchServices};