import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRickAndMorty} from "../../redux/actions/rickmortyActions";
import {RM} from "../R&M/R&M";

const RMs = () => {
    const rickmorty = useSelector(store => store.rickmortyReducer.results)
    const dispatch = useDispatch();
    const [pages,setPages] = useState(1);


    useEffect(() => {
        dispatch(getRickAndMorty(pages))
    },[pages])

    const increment = (page) => {
        page++;
    }
    const decrement = (page) => {
        page--;
    }


    return (
        <div>
            <div style={{width: '100%', display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                {rickmorty.map(value => <RM key={value.id} rickmorty={value}/>)}
            </div>
            <div style={{width: '100%', display: "flex",justifyContent: 'space-around',height: '40px',margin: '30px 0 30px 0'}}>
                <button onClick={() => {
                    decrement(pages)
                }}>Prev</button>
                <button onClick={() => {
                    increment(pages)
                }}>Next</button>
            </div>
        </div>
    );
};

export {
    RMs,
};