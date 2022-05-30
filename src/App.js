import logo from './logo.svg';
//import './App.css';
import NavPan from "./Components/NavPan/NavPan";
import Tecnologes from "./Components/Tecnologes/Tecnologes";
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavPan />
      <Tecnologes />
    </div>
  );
}

export default App;
