import {apiService} from "./apiService";
import {urls} from "../constants";

const rickmortyService = {
    getEpisode: (page) => apiService.get(urls.episode, {params: page}),
    getCharacters: () => apiService.get(urls.character)
}

export {rickmortyService};