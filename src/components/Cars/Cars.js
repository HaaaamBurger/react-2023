import React from 'react';
import {carsServices} from "../../services";
import {Car} from "./Car/Car";

class Cars extends React.Component{
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        carsServices.getAll().then(({data}) => this.setState(data));
    }

    render() {
        let data = [];
        if (this.state) {
            for (let car in this.state) {
                data.push(this.state[car]);
            }
        }

        return(
            <div>{data.map(car => <Car key={car.id} car={car}/>)}</div>
        )
    }
}

export {Cars};