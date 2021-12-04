import React, { useState } from 'react';
import { Select } from "../../UI/Select/Select";
import { Card } from "../../UI/Card/Card";
import imgRick from "../../../Images/rickSanchez.png";


export const Main = () => {
    const [data, setData] = useState({name: "Rick Sanchez", image:imgRick});

    const URL = 'https://rickandmortyapi.com/api/character/';

    const FetchApi=()=> {    
        fetch(URL)
        .then(response=>response.json())
        .then(data=>setData(data.results[0]))
    }
    return(
        <>
            <Select event={FetchApi}/>
            <Card data={data}/>
        </>
    )
}