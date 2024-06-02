import React, { useState } from 'react';
import UserEmailInput from './UserEmailInput.jsx';
import UserInput from './UserInput.jsx';
import UserPasswordInput from './UserPasswordInput.jsx';
import UserPasswordConfirmationInput from './UserPasswordConfirmationInput.jsx';
import AvatarInput from './AvatarInput.jsx';
import ProjectDescriptionInput from '../../ProjectComponents/projectModal/ProjectDescriptionInput.jsx';
import UserView from '../UserView/UserView.jsx';
import './UserModal.css';
import { AvatarProviderSelector } from './AvatarProviderSelector.jsx';
import {register,login} from "../../utils/fetch"
import { saveToken } from "../../utils/local";    

export function UserModal({userModalState}){
    
    let formAnimation = userModalState;

    if(userModalState == "on"){
        formAnimation = "animationSlideUp";  
        console.log("Initial formAnimation: ", formAnimation);   
    }else{
        formAnimation = "animationSlideDown";
        console.log("Initial formAnimation: ", formAnimation);
    }

    const [isRegistered, setIsRegistered] = useState(false);

    // const [formSlideIsUp, setFormSlideUp] = useState(false);
    // const [formSlideIsDown, setFormSlideDown] = useState(true);

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState(''); 
    const [userAvatarProviderSelector, setUserAvatarProviderSelector] = useState(''); 
    const [userPassword, setUserPassword] = useState(''); 
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('');
    const [error,setError] = useState("");

    //Haciendo que al darle al boton llame a la api
    const handleSubmit = async(e)=>{
        e.preventDefault();
        let result;
        if(isRegistered){
                result = await register(userEmail,userName,userPassword,userPasswordConfirmation);
                if(!result.error){
                    setIsRegistered(false);
                    setError("usuario registrado correctamente");
                }
                else{
                    setError(result.error);
                }
        }
        else{
                result = await login(userEmail,userName,userPassword);
                if(!result.error){
                    setError("login correcto");
                    saveToken(result.token);
                    
                }
                else{
                    setError(result.error);
                }
        }
    }

    function formCloseBtnHandler(e){
        e.preventDefault();
        if(userModalState == "on"){
            formAnimation = "animationSlideUp";  
            console.log("formAnimation: ", formAnimation);   
        }
    }
    

    return(
        <div className='userModal-fullscreenBackground'>
                <div className={'userModal-formContainer ' + formAnimation}>                
                        <div className='userModal-menuContainer'>
                                <button className='userModal-formSwitchBtn' onClick={()=>setIsRegistered(register=>!register)} >{!isRegistered ? "INICIAR SESIÓN" : "REGISTRARME"}</button>
                                <button className='userModal-formCloseBtn' onClick={formCloseBtnHandler} >-</button>
                        </div>
                        <h2 className='title-userModal'>{isRegistered ? "INICIAR SESIÓN" : "REGISTRO DE USUARIO"}</h2>
                        {error}
                        <form className='userModal-form' onSubmit={handleSubmit}>
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