import React, { useState } from 'react';

import UserInput from './UserInput.jsx';

import UserPasswordInput from './UserPasswordInput.jsx';

import UserPasswordConfirmationInput from './UserPasswordConfirmationInput.jsx';

import AvatarInput from './AvatarInput.jsx';

import UserView from '../UserView/UserView.jsx';

import './UserModal.css';

export function UserModal(){

    // this is the "state" of the user: decides if we render a register modal or login modal
    const [isRegistered, setIsRegistered] = useState(false);

    // user registration info
    const [userName, setUserName] = useState('');

    const [userAvatar, setUserAvatar] = useState(''); 

    const [userPassword, setUserPassword] = useState(''); 

    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('');

    function submitBtnHandler(e){
      e.preventDefault();
    }

    return(
        <div className='user-register-modalMainContainer'>
            <div className='user-register-formContainer'>
                
                <div className='user-modalChanger-container'>
                    <button onClick={()=>setIsRegistered(register=>!register)} className='user-register-submitBtn'>{!isRegistered ? "   QUIERO INICIAR SESIÓN" : "QUIERO REGISTRARME"}</button>
                </div>
                
                <h1>{!isRegistered ? "REGISTRO DE USUARIO" : "INICIAR SESIÓN"}</h1>
                
                <form className='user-register-form'>
                
                    <div className='user-register-form'>
                        <UserInput onChange={setUserName} />
                        {!isRegistered && <AvatarInput onChange={setUserAvatar} /> }
                        
                        <UserPasswordInput onchange={setUserPassword} />
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
