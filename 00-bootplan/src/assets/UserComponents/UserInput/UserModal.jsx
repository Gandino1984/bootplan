import React, { useState } from 'react';
import UserEmailInput from './UserEmailInput.jsx';
import UserInput from './UserInput.jsx';
import UserPasswordInput from './UserPasswordInput.jsx';
import UserPasswordConfirmationInput from './UserPasswordConfirmationInput.jsx';
import AvatarInput from './AvatarInput.jsx';
import { AvatarProviderSelector } from './AvatarProviderSelector.jsx';
import UserView from '../UserView/UserView.jsx';

import './UserModal.css';

export function UserModal({userModalState}){
 
    const [isRegistered, setIsRegistered] = useState(false);

    let formAnimation = "";

    if(userModalState == "on"){
        formAnimation = "animationSlideUp";  
        console.log("UserModal: formAnimation: ", formAnimation);   
    }else{
        formAnimation = "animationSlideDown";
        console.log("UserModal: formAnimation: ", formAnimation);
    }
    // const [formSlideIsUp, setFormSlideUp] = useState(false);
    // const [formSlideIsDown, setFormSlideDown] = useState(true);

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState(''); 
    const [userAvatarProviderSelector, setUserAvatarProviderSelector] = useState(''); 
    const [userPassword, setUserPassword] = useState(''); 
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('');


    //Haciendo que al darle al boton llame a la api
    function submitBtnHandler(e){
        e.preventDefault();
        // if (isRegistered == false) {
            
        // } else {

        // }
    }

    function userModalCloseBtnHandler(e){
        e.preventDefault();
        if(userModalState == true){
            formAnimation = "animationSlideDown";  
            console.log("userModalCloseBtnHandler: formAnimation -> ", formAnimation);   
        }
    }
    
    return(
        <div className={!userModalState ? 'userModal-fullscreenBackground ' + "hide" : 'userModal-fullscreenBackground ' + "show" }>
                <div className={'userModal-formContainer ' + formAnimation}>                
                        <div className='userModal-menuContainer'>
                                <button className='userModal-formSwitchBtn' onClick={()=>setIsRegistered(register=>!register)} > {!isRegistered ? "INICIAR SESIÓN" : "REGISTRARME"} </button>
                                <button className='userModal-formCloseBtn' onClick={userModalCloseBtnHandler} >-</button>
                        </div>
                        <h2 className='title-userModal'>{isRegistered ? "INICIAR SESIÓN" : "REGISTRO DE USUARIO"}</h2>
                        <form className='userModal-form'>
                                <div className='userModal-inputsContainer'>
                                    <UserEmailInput onChange={setUserEmail} />                                   
                                    <UserInput onChange={setUserName} />
                                    {!isRegistered && <AvatarInput onChange={setUserAvatar} /> }
                                    {!isRegistered && <AvatarProviderSelector onChange={setUserAvatarProviderSelector} /> }
                                    <UserPasswordInput onChange={setUserPassword} />
                                    {!isRegistered && <UserPasswordConfirmationInput onchange={setUserPasswordConfirmation} /> }
                                </div>    
                            <button type="submit" className='userModal-submitBtn' onClick={submitBtnHandler}> {isRegistered ? "INICIO" : "REGISTRARME"}</button>
                        </form> 
                        <UserView userName={userName} userAvatar={userAvatar} />            
                </div>
        </div>
    );
}

export default UserModal;
