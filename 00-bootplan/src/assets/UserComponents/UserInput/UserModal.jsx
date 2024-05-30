import React, { useState } from 'react';

import UserEmailInput from './UserEmailInput.jsx';

import UserInput from './UserInput.jsx';

import UserPasswordInput from './UserPasswordInput.jsx';

import UserPasswordConfirmationInput from './UserPasswordConfirmationInput.jsx';

import AvatarInput from './AvatarInput.jsx';

import UserView from '../UserView/UserView.jsx';

import './UserModal.css';

export function UserModal(){
 
    const [isRegistered, setIsRegistered] = useState(false);

    const [formSlideIsUp, setFormSlideUp] = useState(true);
    // const [formSlideIsDown, setFormSlideDown] = useState(true);
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState(''); 
    const [userPassword, setUserPassword] = useState(''); 
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('');

    //Haciendo que al darle al boton llame a la api
    function submitBtnHandler(e){
        if (isRegistered == false) {
            
        } else {

        }
      e.preventDefault();
    }
    const formSlideClass = formSlideIsUp ? "animationSlideUp" : "animationSlideDown";

    return(
        <div className='user-register-modalMainContainer'>
                <div className={'user-register-formContainer ' + formSlideClass}>                
                        <div className='user-modalChanger-container'>
                                <button onClick={()=>setIsRegistered(register=>!register)} className='user-register-submitBtn'>{!isRegistered ? "   QUIERO INICIAR SESIÓN" : "QUIERO REGISTRARME"}</button>
                                <button onClick={()=>setFormSlideUp(formSlideIsUp=>!formSlideIsUp)} className>X</button>
                        </div>
                        <h2 className='title-userModal'>{!isRegistered ? "REGISTRO DE USUARIO" : "INICIAR SESIÓN"}</h2>
                        <form className='user-register-form'>
                                <div className='userformContainer'>
                                    <UserEmailInput onChange={setUserEmail} />                                   
                                    <UserInput onChange={setUserName} />
                                    {!isRegistered && <AvatarInput onChange={setUserAvatar} /> }
                                    <UserPasswordInput onChange={setUserPassword} />
                                    {!isRegistered && <UserPasswordConfirmationInput onchange={setUserPasswordConfirmation} /> }
                                </div>    
                            <button type="submit" className='user-form-submitBtn' onClick={submitBtnHandler}>{isRegistered ? "INICIO" : "REGISTRARME"}</button>
                        </form> 
                        <UserView userName={userName} userAvatar={userAvatar} />            
                </div>
        </div>
    );
}

export default UserModal;
