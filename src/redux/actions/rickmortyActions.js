import {rickmortyServices} from "../../services";

const rickmortyActions = {
    setAll: (data) => ({type: 'SET_ALL', payload: data})
}

const getRickAndMorty = (id) => (dispatch) => {
    rickmortyServices.getById(id).then(({data}) => dispatch(rickmortyActions.setAll(data)))
}


export {rickmortyActions,getRickAndMorty};