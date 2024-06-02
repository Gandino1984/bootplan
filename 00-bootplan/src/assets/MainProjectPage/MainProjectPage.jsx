import React from 'react'
import { useState } from 'react'
import './MainProjectPage.css'

import HeaderMenuBar from "./HeaderMenuBar/HeaderMenuBar.jsx";
import UserModal from "../UserComponents/UserInput/UserModal.jsx";


export function MainProjectPage() {
  const [userModalState, setUserModalState] = useState("off");

  function userRegisterBtnClickHandler(e){
    if (userModalState == "off"){
      setUserModalState("on");
    } else {
      setUserModalState("off");
    }
  }
  
  return (
        <div className='mainProjectPage-mainContainer'>
            <div className="mainProjectPage-header">
                <button onClick={userRegisterBtnClickHandler} className='headerMenuBar-newUserBtn'><ion-icon name="person-add"></ion-icon></button>
                <HeaderMenuBar />
                <UserModal userModalState={userModalState} className='userModal' />  
            </div>
        </div>
  
  )
}

export default MainProjectPage; 