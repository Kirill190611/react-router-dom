import React, {useState} from 'react';
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Route, Routes, Navigate, NavLink} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";
import adidasModel2 from './assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp';
import adidasModel1 from './assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp';
import adidasModel3 from './assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp';
import {Model} from "./components/pages/Model";

export type AdidasItemProps = {
    id: number
    model: string
    collection: string
    price: string
    picture: string
}

export const adidasArr: AdidasItemProps[] = [
    {
        id: 0,
        model: 'Adidas ADIFOM TRXN',
        collection: 'new collection 1',
        price: '100200$',
        picture: adidasModel1,
    },
    {
        id: 1,
        model: 'Adidas ADIFOM SUPER',
        collection: 'new collection 2',
        price: '200300$',
        picture: adidasModel2,
    },
    {
        id: 2,
        model: 'Adidas ADIFOM SUPERPUPER',
        collection: 'new collection 3',
        price: '300400$',
        picture: adidasModel3,
    },
]

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    ERROR: '/error404',
} as const

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Navigation>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE1}>Adidas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE2}>Puma</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE3}>Abibas</NavLink>
                    </S.NavWrapper>
                </S.Navigation>
                <S.Content>
                    <Routes>
                        <Route path="/"
                               element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1}
                               element={<Adidas/>}/>
                        <Route path={PATH.PAGE2}
                               element={<Puma/>}/>
                        <Route path={PATH.PAGE3}
                               element={<Abibas/>}/>
                        <Route path={'/adidas/:id'}
                               element={<Model/>}/>


                        <Route path="/*"
                               element={<Error404/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

export default App;
