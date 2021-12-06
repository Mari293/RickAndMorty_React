import React, { useState,useEffect } from 'react';
import { Select } from "../../UI/Select/Select";
import { Card } from "../../UI/Card/Card";
// import imgRick from "../../../Images/rickSanchez.png";

export const Main = () => {
    
    const [nameCharacters, setCharacters] = useState([]);
    const [nameCharacter, setCharacter] = useState({})

    const URL = 'https://rickandmortyapi.com/api/character/';
    
    const fetchApi = (id) => {
        fetch(`${URL}/${id}`)
        .then(response => response.json())
        .then(data=>{
            if(id===""){
                setCharacters(data.results)
            }
            else{
                setCharacter(data)
            }
        })
    }

    const valueSelect = (event) => {
        if(event.target.value === 'selectCharacter'){ 
            console.log("ninguno");
        }
        else if (event.target.value === 'selectAllCharacter'){
            console.log("todos");
        }
        else{
            fetchApi(event.target.value)
                
            
        }
    }
    
    useEffect(() =>{
        fetchApi('')
    },[])

    return(
        <main>
            <Select options={nameCharacters} select={valueSelect}/>
            <Card infoCharacter={nameCharacter} />
        </main>
    )
}