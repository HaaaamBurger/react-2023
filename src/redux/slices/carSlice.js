import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    isLoading: false
}

const all = () => createAsyncThunk(
    'car/all',
    async (_,thunkAPI) => {
        try {
            return await carService.getAll();
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'car',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled,(state, action) => {
                state.cars = action.payload;
                state.isLoading = false
            })
            .addCase(all.pending, (state) => {
                state.isLoading = true;
            }),
    reducers: {}
})

const {reducer: carReducer} = carSlice;

const carActions = {
    all
}

export {carReducer,carActions};