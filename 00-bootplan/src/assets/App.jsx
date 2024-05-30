import { UserRegister } from './UserComponents/UserRegister/UserRegister.jsx';
import './App.css'
import UserView from './UserComponents/UserView/UserView.jsx'
import ProyectCard from './ProyectComponents/ProyectCard/ProyectCard.jsx'
import { HeadBar } from './HomeComponents/HeadBar/HeadBar.jsx';
import {HomeInfo} from './HomeComponents/HomeInfo/HomeInfo.jsx'

import React from 'react'

export function App() {
    return (
        <>
            <HeadBar /> 
            <HomeInfo />   
            {/* <ProyectCard /> */}
        </>   
    )
}

export default App;