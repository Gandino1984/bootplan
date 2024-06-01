import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/App.jsx'
import ComponentTestGerman from './assets/ComponentTestGerman.jsx';
import ComponentTestLuis from './assets/ComponentTestLuis.jsx';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ComponentTestLuis />
  </React.StrictMode>
);
