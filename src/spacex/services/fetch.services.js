import {BaseURL} from "../links/links";

const FetchServices = {
    getLaunches: () => fetch(BaseURL),
};

export {
    FetchServices,
};