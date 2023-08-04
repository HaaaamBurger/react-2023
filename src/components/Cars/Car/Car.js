import React from 'react';

class Car extends React.Component{

    render() {

        const {id,brand,price,year} = this.props.car;
        return(
            <div style={{margin: '10px'}}>
                <div>{id}</div>
                <div>{brand}</div>
                <div>{price}</div>
                <div>{year}</div>
            </div>
        )
    }
}

export {Car}