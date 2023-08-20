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
    reducers: {},
    extraReducers: {}
})

const {reducer: carReducer} = carSlice;

const carActions = {
    all
}

export {carReducer,carActions};