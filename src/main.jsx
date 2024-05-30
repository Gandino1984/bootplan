import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ComponentTest from "./assets/ComponentTestGerman.jsx"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponentTest />
    {/* <App /> */}
  </React.StrictMode>,
)