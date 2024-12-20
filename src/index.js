import React from 'react';
import ReactDOM from 'react-dom'; 

const inputClick = () => console.log('clicked')

const help = "help text"

const elements = (
  <div className="name">
    <h1>Hello world</h1>
    <input placeholder="Help" onClick={inputClick} />
    <p>{help == "help text" ? "Yes" : "No"}</p>
  </div>
);

const app = document.getElementById('campus');
const root = ReactDOM.createRoot(app);  
root.render(elements);
