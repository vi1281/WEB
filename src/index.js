import React from 'react';
import ReactDOM from 'react-dom'; 
import Header from "./Header"
import './styles/style.css'

const elements = (
  <Header />
);

const app = document.getElementById('campus');
const root = ReactDOM.createRoot(app);  
root.render(elements, app);  // Рендерим элементы в div с id "campus"
