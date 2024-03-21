import './App.css';
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import Shop from "./Component/Shop/Shop";
import Header from "./Component/STATIC/Header";
import Hero from "./Component/Hero/Hero";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>

                <Hero/>

                <Shop/>


            </BrowserRouter>
        </>
    );
}

export default App;
