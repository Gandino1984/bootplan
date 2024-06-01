import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ComponentTest from './assets/ComponentTestGerman.jsx'
import ProjectModal from './assets/ProjectComponents/projectModal/ProjectModal.jsx'
import UserModal from './assets/UserComponents/UserInput/UserModal.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ComponentTest />
  </React.StrictMode>,
)
