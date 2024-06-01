import './App.css'
import "./ComponentTestGerman.css"
import UserView from './UserComponents/UserView/UserView.jsx';
import { HeadBar } from './HomeComponents/HeadBar/HeadBar.jsx';
import {HomeInfo} from './HomeComponents/HomeInfo/HomeInfo.jsx';
import UserModal from "./UserComponents/UserInput/UserModal.jsx";

import React from 'react'

export function App() {
    return (
        <>
            <div className="ComponentTest-container">
                <UserModal /> 
            </div> 
            <HeadBar />
            <HomeInfo />
            {/* <ProyectCard /> */}
        </>   
    )
}

export default App;
