import React from 'react';
import {useParams} from "react-router-dom";
import {pumaArr, PumaItemProps} from "./Puma";
import {adidasArr, AdidasItemProps} from "./Adidas";

type CrossModelType = {
    [key: string]: (AdidasItemProps[] | PumaItemProps[])
}

const crossModels: CrossModelType = {
    puma: pumaArr,
    adidas: adidasArr,
}

export const Model = () => {
    const {model, id} = useParams();

    const currentModel = model
        ? crossModels[model].find(el => el.id === Number(id))
        : null

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