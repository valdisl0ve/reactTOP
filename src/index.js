import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));



let obj={
  'food':2,
  'whater':3,
  'suplices':12

}

let personal={
  'mechsnics':2,
  'workers':3,
}



function send(NewText){
  obj[NewText]=10;
  console.log(obj)
}




root.render(
  <React.StrictMode>
        <App obj={obj} personal={personal} call={send}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
