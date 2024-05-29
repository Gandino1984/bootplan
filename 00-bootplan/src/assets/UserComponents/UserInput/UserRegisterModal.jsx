import React, { useState } from 'react';

import Modal from "../../GeneralComponents/Modal.jsx";

import UserInput from './UserInput.jsx';

import AvatarInput from './AvatarInput.jsx';

import UserView from '../UserView/UserView.jsx';


export function UserRegisterModal(){

    const [userName, setUserName] = useState('');

    const [userAvatar, setUserAvatar] = useState(''); 

    return(
        <>
            <Modal>
                <p>Ingresa tus datos</p>
                <UserInput onChange={setUserName} />
                <AvatarInput onChange={setUserAvatar} />
                <UserView userName={userName} userAvatar={userAvatar} />
            </Modal>
        </>
        
    )
}

export default UserRegisterModal;
