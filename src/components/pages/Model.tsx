import React from 'react';
import {adidasArr} from "../../App";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

export const Model = () => {
    const params = useParams()

    const currentModel = adidasArr.find(model => model.id === Number(params.id))

    return (
        <div>
            {currentModel
                ?
                <>
                    <h2>{currentModel.model}</h2>
                    <div>{currentModel.collection}</div>
                    <div>{currentModel.price}</div>
                    <img src={currentModel.picture} alt={currentModel.collection}/>
                </>
                : <h2>Absent model</h2>
            }
        </div>
    );
};