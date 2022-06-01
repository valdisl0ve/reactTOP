import logo from './logo.svg';
import './App.css';
import NavPan from "./Components/NavPan/NavPan";
import Tecnologes from "./Components/Tecnologes/Tecnologes";
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (

    <div className="App">
        <NavPan />
111
        <BrowserRouter>
                <Routes>
                    <Route path="/main/*" element={<Tecnologes />}/>
                    <Route path="/about/*" element={<div><p>Я в эбауте</p></div>}/>
                </Routes>
        </BrowserRouter>

     </div>

  );
}

export default App;
