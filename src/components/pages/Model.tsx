import React from 'react';
import {adidasArr} from "../../App";
import {useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams()

    return (
        <div>
            <h3>{adidasArr[Number(params.id)].model}</h3>
            <div>{adidasArr[Number(params.id)].collection}</div>
            <div>{adidasArr[Number(params.id)].price}</div>
            <img src={adidasArr[Number(params.id)].picture}
                 alt={`${adidasArr[Number(params.id)].model} from ${adidasArr[Number(params.id)].collection}`}/>
        </div>
    );
};