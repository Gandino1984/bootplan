import React, { useState } from 'react';

import UserInput from '../UserInput/UserInput.jsx';

import UserView from '../UserView/UserView.jsx';

import './UserRegister.css' 


export function UserRegister(){

    const [userName, setUserName] = useState('');
    const [userAvatar, setUserHandle] = useState(''); 

    const handleFormSubmit = ({userName}, {userAvatar}) => {
        setUserName(userName);
        setUserHandle(userAvatar);
    };

    return (
        <>
          <UserInput onFormSubmit={handleFormSubmit} />
        </>
      );

}