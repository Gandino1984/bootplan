import React from 'react'
import ReactDOM from 'react-dom/client'
import UserView from './assets/UserComponents/UserView/UserView.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <UserView userName='German Andino' userHandle='germanandino'/>
  </>
  
);
