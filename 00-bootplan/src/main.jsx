import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ComponentTestGerman from './assets/ComponentTestGerman.jsx'
import ProjectModal from './assets/ProjectComponents/projectModal/ProjectModal.jsx'
import UserModal from './assets/UserComponents/UserInput/UserModal.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ComponentTestGerman />
  </React.StrictMode>,
)
