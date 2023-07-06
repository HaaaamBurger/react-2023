import styles from './rick&morty.module.css'
const RickMorty = ({id,name,species,gender,img}) => {
    return(
        <div>
            <div>
                <h4>Id: {id} - Name: {name}</h4>
                <ul>
                    <li>Species: {species}</li>
                    <li>Gender: {gender}</li>
                </ul>
                <img src={img} alt=""/>
            </div>
        </div>
    )
}
export {RickMorty};