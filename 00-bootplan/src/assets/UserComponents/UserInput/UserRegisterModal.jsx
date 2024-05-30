import React, { useState } from 'react';

import UserInput from './UserInput.jsx';

import UserPasswordInput from './UserPasswordInput.jsx';

import UserPasswordConfirmationInput from './UserPasswordConfirmationInput.jsx';

import AvatarInput from './AvatarInput.jsx';

import UserView from '../UserView/UserView.jsx';

import './UserRegisterModal.css';

export function UserRegisterModal(){

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
                
                <form className='user-register-form'>
                
                    <div className='user-register-form'>
                        <UserInput onChange={setUserName} />
                        <AvatarInput onChange={setUserAvatar} />
                        <UserPasswordInput onchange={setUserPassword} />
                        <UserPasswordConfirmationInput onchange={setUserPasswordConfirmation} />
                    </div>
            
                    <button type='submit' onClick={submitBtnHandler} className='user-register-submitBtn'>REGISTRARME</button>
                
                </form> 
                
                <UserView userName={userName} userAvatar={userAvatar} />
            
            </div>

        </div>
    );
}

export default UserRegisterModal;
