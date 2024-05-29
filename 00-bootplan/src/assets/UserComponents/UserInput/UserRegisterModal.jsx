import React, { useState } from 'react';

import UserInput from './UserInput.jsx';

import AvatarInput from './AvatarInput.jsx';

import UserView from '../UserView/UserView.jsx';

import './UserRegisterModal.css';

export function UserRegisterModal(){

    const [userName, setUserName] = useState('');

    const [userAvatar, setUserAvatar] = useState(''); 

    return(
        <div className='user-register-modalMainContainer'>
            <div className='user-register-inputViewContainer'>
                <UserInput onChange={setUserName} />
                <AvatarInput onChange={setUserAvatar} />
                <UserView userName={userName} userAvatar={userAvatar} />
            </div>
        </div>
    );
}

export default UserRegisterModal;
