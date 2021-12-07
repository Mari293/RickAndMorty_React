import React, { useState, useEffect } from 'react';
import { Select } from "../../UI/Select/Select";
import { Card } from "../../UI/Card/Card";
import "./Main.css";

export const Main = () => {
    
    const [nameCharacters, setCharacters] = useState([]);
    const [nameCharacter, setCharacter] = useState({})

    const URL = 'https://rickandmortyapi.com/api/character/';
    
    const fetchApi = (id) => {
        fetch(`${URL}/${id}`)
        .then(response => response.json())
        .then(data=>{
            if(id !== ""){
                setCharacter(data)
                console.log(data)
            }
            else{
                setCharacters(data.results)
                console.log(data.results)
            }
        })
    }

    const valueSelect = (event) => {
        
        if(event.target.value === 'selectCharacter'){ }
        else if (event.target.value === 'selectAllCharacter'){
            fetchApi("")
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
            <div className="cards">
                <Card infoCharacter={nameCharacter} />
            </div>
            {/* <section>
                {
                    nameCharacters.map(element => (
                        <Card infoCharacter={element} />
                    ))
                }
            </section> */}
        </main>
    )
}