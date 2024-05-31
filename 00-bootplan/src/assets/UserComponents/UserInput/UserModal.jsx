import React, { useState } from 'react';
import UserEmailInput from './UserEmailInput.jsx';
import UserInput from './UserInput.jsx';
import UserPasswordInput from './UserPasswordInput.jsx';
import UserPasswordConfirmationInput from './UserPasswordConfirmationInput.jsx';
import AvatarInput from './AvatarInput.jsx';
import ProjectDescriptionInput from '../../ProyectComponents/projectModal/ProjectDescriptionInput.jsx';
import UserView from '../UserView/UserView.jsx';
import './UserModal.css';
import { AvatarProviderSelector } from './AvatarProviderSelector.jsx';

export function UserModal(){
 
    const [isRegistered, setIsRegistered] = useState(false);

    const [formSlideIsUp, setFormSlideUp] = useState(false);
    const [formSlideIsDown, setFormSlideDown] = useState(true);

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState(''); 
    const [userAvatarProviderSelector, setUserAvatarProviderSelector] = useState(''); 
    const [userPassword, setUserPassword] = useState(''); 
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('');

    function submitBtnHandler(e){
      e.preventDefault();
    }

    const formSlideAnimation = formSlideIsDown ? "animationSlideUp" : "animationSlideDown";

    return(
        <div className='userModal-fullscreenBackground'>
                <div className={'userModal-formContainer ' + formSlideAnimation}>                
                        <div className='userModal-menuContainer'>
                                <button className='userModal-formSwitchBtn' onClick={()=>setIsRegistered(register=>!register)} >{!isRegistered ? "INICIAR SESIÓN" : "REGISTRARME"}</button>
                                <button className='userModal-formCloseBtn' onClick={()=>setFormSlideDown(formSlideIsDown=>!formSlideIsDown)} >-</button>
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
                            <button type="submit" className='userModal-submitBtn' onClick={submitBtnHandler}>{isRegistered ? "INICIO" : "REGISTRARME"}</button>
                        </form> 
                        <UserView userName={userName} userAvatar={userAvatar} />            
                </div>
        </div>
    );
}

export default UserModal;
