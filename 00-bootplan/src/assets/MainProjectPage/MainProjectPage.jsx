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
        <>
             <HeaderMenuBar onLoad={userRegisterBtnClickHandler} />
             <UserModal onLoad={userModalState} className='userModal' />  
        </>
  
  )
}

export default MainProjectPage; 