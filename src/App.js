import './App.css';
import Header from "./Component/STATIC/Header";
import {BrowserRouter} from 'react-router-dom'
import Hero from "./Component/Hero/Hero";
import Shop from "./Component/Shop/Shop";


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
