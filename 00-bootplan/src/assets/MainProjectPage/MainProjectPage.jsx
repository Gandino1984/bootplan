import React from 'react'
import { useState } from 'react'
import './MainProjectPage.css'

import HeaderMenuBar from "./HeaderMenuBar/HeaderMenuBar.jsx";
import UserModal from "../UserComponents/UserInput/UserModal.jsx";

import Cardmanager from "../ProjectComponents/CardManager/CardManager.jsx";

export function MainProjectPage(){

  // array para almacenar los proyectos temporalmente
  const projects = [
    //crear json con proyectos
    ];
  
  const [userModalState, setUserModalState] = useState(false);

  function userRegisterBtnClickHandler(e){
    if (userModalState == false){
      setUserModalState(true);
      console.log("MainProjectPage: userModalState = true");
    } 
  }

  function userModalCloseBtnHandler(e){
      setUserModalState(false);
      console.log("Main Project Page: userModalState = false");
  }
  
  return (
        <div className='mainProjectPage-mainContainer'>
            <div className="mainProjectPage-header">
                <button onClick={userRegisterBtnClickHandler} className='headerMenuBar-newUserBtn'><ion-icon name="person-add"></ion-icon></button>
                <HeaderMenuBar />
                <UserModal userModalState={userModalState} userModalCloseBtnHandler={userModalCloseBtnHandler} className='userModal' /> 
                <Cardmanager />
            </div>
        </div>
  )
}

export default MainProjectPage; 