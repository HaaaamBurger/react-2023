import {rickmortyApiService} from "./rickmortyApiService";
import {rickmortyUrls} from "../../constants";

const rickmortyService = {
    getEpisodes: () => rickmortyApiService.get(rickmortyUrls.episode)
}

export {rickmortyService};