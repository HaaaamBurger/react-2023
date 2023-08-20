import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services/carService";

const initialState = {
    cars: [],
    isLoading: false,
    carForUpdate: null
}

const all = createAsyncThunk(
    'carSlice/all',
    async(_,thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data;
        }catch (e) {
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car);
            thunkAPI.dispatch(all())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async (id,thunkAPI) => {
        try {
            await carService.deleteById(id);
            thunkAPI.dispatch(all())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const update = createAsyncThunk(
    'carSlice/update',
    async ({id,car}, thunkAPI) => {
        try {
            await carService.updateById(id,car);
            thunkAPI.dispatch(all());
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled,(state, action) => {
                state.cars = action.payload;
                state.isLoading = false;
            })
            .addCase(all.pending, (state) => {
                state.isLoading = true
            })
            .addCase(update.fulfilled, (state) => {
                state.carForUpdate = null;
            })
            .addCase(create.fulfilled, (state, action) => {})
            .addCase(deleteCar.fulfilled, (state, action) => {})
})

const {reducer: carReducer,actions: {setCarForUpdate}} = carSlice;

const carActions = {
    all,
    create,
    deleteCar,
    update,
    setCarForUpdate
}

export {carReducer,carActions}