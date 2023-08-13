import {carsService} from "../../../services";

const carsActionsTypes = {
    SET_ALL_CARS: 'SET_ALL_CARS',
    DELETE_CAR: 'DELETE_CAR',
    UPDATE_CAR: 'UPDATE_CAR',
    CREATE_CAR: 'CREATE_CAR'
}

const carsActions = {
    setAll: (data) => ({type: carsActionsTypes.SET_ALL_CARS, payload: data}),
    deleteCar: (id) => ({type: carsActionsTypes.DELETE_CAR, payload: id}),
    createCar: (car) => ({type: carsActionsTypes.CREATE_CAR, payload: car})
}

const getCars = () => async(dispatch) => {
    const {data} = await carsService.getAll()
    dispatch(carsActions.setAll(data))
}

const deleteCar = (id) => async(dispatch) => {
    await carsService.deleteById(id);
    dispatch(carsActions.deleteCar(id))
    await dispatch(getCars())
}

const createCar = (car) => async(dispatch) => {
    const createdCar = await carsService.createCar(car);
    dispatch(carsActions.createCar(createdCar));
    await dispatch(getCars())
}

const carsAxiosMethods = {
    getCars,
    deleteCar,
    createCar
}

export {carsActionsTypes,carsAxiosMethods};