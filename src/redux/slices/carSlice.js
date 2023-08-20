import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    isLoading: false
}

const all = () => createAsyncThunk(
    'carSlice/all',
    async (_,thunkAPI) => {
        const data = await carService.getAll();
        return data;
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.cars = action.payload;
    })
})

const {reducer: carReducer} = carSlice;

const carActions = {
    all
}

export {carReducer,carActions};