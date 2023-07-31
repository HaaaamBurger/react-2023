import React from 'react';

class Car extends React.Component{
    constructor({car}) {
        super({car});
        this.car = car;
    }

    render() {
        return(
            <div style={{margin: '10px'}}>
                <div>{this.car.id}</div>
                <div>{this.car.brand}</div>
                <div>{this.car.price}</div>
                <div>{this.car.year}</div>
            </div>
        )
    }
}

export {Car}