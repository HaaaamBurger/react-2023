import {carsActionsTypes} from "../../actions";

const initialState = {
    cars: [],
    deleteCar: null,
    updateCar: null,
    createCar: null
}

const carsReducer = (state = initialState, action) => {
    switch (action.type){
        case carsActionsTypes.SET_ALL_CARS:
            return{
                ...state,
                cars: action.payload
            }
        case carsActionsTypes.DELETE_CAR:
            return {
                ...state,
                deleteCar: state.cars.find(car => car.id === action.payload)
            }
        case carsActionsTypes.CREATE_CAR:
            return {
                ...state,
                createCar: action.payload
            }
        default:
            return state
    }
}

export {carsReducer};