import logo from './logo.svg';
import './App.css';
import NavPan from "./Components/NavPan/NavPan";
import Tecnologes from "./Components/Tecnologes/Tecnologes";
import React from "react";


function App() {
  return (
      <browserRouter>
    <div className="App">
        <NavPan />
        <Tecnologes />

     </div>
      </browserRouter>
  );
}

export default App;
