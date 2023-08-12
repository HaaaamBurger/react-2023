import {placeholderApiService} from "./placeholderApiService";
import {placeholderBaseURL, placeholderUrls} from "../../constants";

const placeholderService = {
    getPosts: () => placeholderApiService.get(placeholderUrls.posts),
    getComments: () => placeholderApiService.get(placeholderUrls.comments),
    getAlbums: () => placeholderApiService.get(placeholderUrls.albums)
}

export {placeholderService};