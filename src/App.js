import './App.css';
import axios from "axios";
import {BACKEND_BASE_URL} from "./Constants/globalConst";

function App() {
    const getData = () => {
        axios.get(BACKEND_BASE_URL + "/getAllUsers")
            .then((res) => {
                console.log(res)
            }).catch((err) => {
            console.log(err)
        })
        console.log(BACKEND_BASE_URL)
    }

    return (
        <div>s
            <button onClick={getData}>
                Click me test
            </button>
        </div>
    );
}

export default App;
