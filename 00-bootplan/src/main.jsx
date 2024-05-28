import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const createButton = ({buttonText}) => {
  return(
    <button>{buttonText}</button>
  );
}


root.render(
  <>
      {createButton({"buttonText":"botón"})}
  </>
);
