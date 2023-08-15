import {carsService} from "../../../services";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../store";
import {isNumber} from "util";

export interface Cars {
    id: number,
    brand: string,
    price: number,
    year: number
}


const enum carsActionsTypes {
    SET_ALL_CARS = 'SET_ALL_CARS',
    DELETE_CAR = 'DELETE_CAR',
    UPDATE_CAR = 'UPDATE_CAR',
    CREATE_CAR = 'CREATE_CAR'
}

export type PropertiesTypes<T> = T extends { [key: string]: infer U}
    ? U
    : never;

export type CarsActionsType = ReturnType<
    PropertiesTypes<typeof carsActions>
    >

export type CarsThunkType = ThunkAction<Promise<void>, AppStateType, null, CarsActionsType>

const carsActions = {
    setAll: (data: []) => ({type: carsActionsTypes.SET_ALL_CARS, payload: data}),
    deleteCar: (id: number) => ({type: carsActionsTypes.DELETE_CAR, payload: id}),
    createCar: (car: {}) => ({type: carsActionsTypes.CREATE_CAR, payload: car}),
    updateCar: (car: {}) => ({type: carsActionsTypes.UPDATE_CAR, payload: {car}})
}

const getCars = ():CarsThunkType => async(dispatch) => {
    const {data} = await carsService.getAll()
    dispatch(carsActions.setAll(data))
}

const deleteCar = (id: number,car: any):CarsThunkType => async(dispatch) => {
    await carsService.deleteById(id);
    dispatch(carsActions.deleteCar(car))
    await dispatch(getCars())
}

const createCar = (car: {}):CarsThunkType => async(dispatch) => {
    const createdCar = await carsService.createCar(car);
    dispatch(carsActions.createCar(createdCar));
    await dispatch(getCars())
}

const updateCar = (id: number,car: any):CarsThunkType => async(dispatch) => {
    await carsService.updateById(id, car);
    dispatch(carsActions.updateCar({}));
    await dispatch(getCars());

}

const carsAxiosMethods = {
    getCars,
    deleteCar,
    createCar,
    updateCar
}

export {carsActionsTypes,carsAxiosMethods,carsActions};