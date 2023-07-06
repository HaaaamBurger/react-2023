import styles from './simpsons.module.css'
const Simpsons = ({name,gender,age,link}) => {
    return(
        <div>
            <div>
                <h3>{name}</h3>
                <ul>
                    <li>Gender: {gender}</li>
                    <li>Age: {age}</li>
                </ul>
                <img src={link} alt=""/>
            </div>
        </div>
    )
}
export {Simpsons};
