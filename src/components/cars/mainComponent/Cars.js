import {ShowCars} from "../showCars/ShowCars";
import {Form} from "../form/Form";


const Cars = () => {
    return (
        <div>
            <div>
                <Form/>
            </div>
            <hr/>
            <div>
                <ShowCars/>
            </div>
        </div>
    );
};

export {
    Cars,
};