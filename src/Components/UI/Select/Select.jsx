import React from 'react';
import './Select.css';

export const Select = ({options, select}) => { 
    return(
        <>
            <select className="selectCharacter" onChange={select}>
                <option value="selectCharacter">Select a Character</option>
                <option value="selectAllCharacter">All Characters</option>
                {
                    options.map(element=>(
                        <option key={element.id} value={element.id}>{element.name}</option>
                    ))
                }
            </select>
        </>
    )
}