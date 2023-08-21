import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {rickmortyService} from "../../services";

const initialState = {
    info: [],
    episode: [],
    isLoading: false
}

const allEpisode = createAsyncThunk(
    'episodeSlice/allEpisode',
    async ({page},thunkAPI) => {
        try {
            const {data} = await rickmortyService.getEpisode(page);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(allEpisode.fulfilled, (state, action) => {
            state.isLoading = false;
            state.episode = action.payload.results;
            state.info = action.payload.info;
        })
        .addCase(allEpisode.pending,(state) => {
            state.isLoading = true;
        })
})

const {reducer: episodeReducer,actions} = episodeSlice;

const episodeActions = {
    ...actions,
    allEpisode
}

export {episodeReducer,episodeActions}