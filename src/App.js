import './App.css';
import Header from "./Component/STATIC/Header";
import {BrowserRouter} from 'react-router-dom'
import Hero from "./Component/Hero/Hero";


function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>

                <Hero/>


            </BrowserRouter>

        </>
    );
}

export default App;
