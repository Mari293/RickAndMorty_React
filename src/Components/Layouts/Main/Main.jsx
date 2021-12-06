import React, { useState,useEffect } from 'react';
import { Select } from "../../UI/Select/Select";
import { Card } from "../../UI/Card/Card";
import imgRick from "../../../Images/rickSanchez.png";

export const Main = () => {
    
    const [nameCharacters, setCharacters] = useState([{name:'Rick Sanchez', image:imgRick}]);

    const URL = 'https://rickandmortyapi.com/api/character/';
    
    const fetchApi = () => {
        fetch(URL)
        .then(response => response.json())
        .then(data=>setCharacters(data.results))
    }

    const valueSelect = (event) => {
        if(event.target.value == 'selectCharacter'){
            console.log("Puto");
        }
    }
    
    useEffect(() =>{
        fetchApi('')
    },[])

    return(
        <main>
            <Select options={nameCharacters} select={valueSelect}/>
            <Card namesCharacters={nameCharacters} />
        </main>
    )
}