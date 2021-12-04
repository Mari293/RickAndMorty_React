import React from "react";
import './Card.css';

export const Card = (data) =>{
    const {name, image} = data.data;

    return(
        <div className="card">
            <div className="line"></div>
            <div className="card-informaction">
                <h2 className="name-character">{name}</h2>
                <img className="image-character" src={image} alt={name} />
            </div>
        </div>
    )
}