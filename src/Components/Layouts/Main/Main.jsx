import React, { useState, useEffect } from 'react';
import { Select } from "../../UI/Select/Select";
import { Card } from "../../UI/Card/Card";
import "./Main.css";

export const Main = () => {
    
    const [nameCharacters, setCharacters] = useState([]);
    const [nameCharacter, setCharacter] = useState({});
    const [select, setValue] = useState(false);
    const [empty, setEmpty] = useState(false);

    const URL = 'https://rickandmortyapi.com/api/character/';
    
    const fetchApi = (id) => {
        fetch(`${URL}/${id}`)
        .then(response => response.json())
        .then(data=>{
            if(id !== ""){
                setCharacter(data)
            }
            else{
                setCharacters(data.results)
            }
        })
    }
    
    const valueSelect = (event) => {
        
        if(event.target.value === 'selectCharacter'){setEmpty(true)}
        else if (event.target.value === 'selectAllCharacter'){
            fetchApi("")
            setValue(true);
            setEmpty(false)
        }
        else{
            fetchApi(event.target.value)
            setEmpty(false)
            setValue(false);
        }
    }
    
    useEffect(() =>{
        fetchApi('')
        setEmpty(true)
    },[])

    return(
        <main>
            <Select options={nameCharacters} select={valueSelect}/>
            <div className="cards">
                {
                    empty===true?(console.log("Funciona")):(select===true?(
                        nameCharacters.map(element => (
                            <Card key={element.id} infoCharacter={element} />
                        ))
                    ): <Card infoCharacter={nameCharacter}/> )
                }
            </div>
        </main>
    )
}