import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import ProjectModal from './assets/ProyectComponents/projectModal/ProjectModal.jsx'
import UserModal from './assets/UserComponents/UserInput/UserModal.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <UserModal />
  </React.StrictMode>,
)
