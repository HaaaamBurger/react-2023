import React, {Component} from 'react';
import {carsServices} from "../../services";
import {Car} from "./Car/Car";

class Cars extends Component{
    constructor() {
        super();
        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        carsServices.getAll().then(({data}) => this.setState({cars: data}));
    }

    render() {

        return(
            <div>{this.state.cars.map(car => <Car key={car.id} car={car}/>)}</div>
        )
    }
}

export {Cars};