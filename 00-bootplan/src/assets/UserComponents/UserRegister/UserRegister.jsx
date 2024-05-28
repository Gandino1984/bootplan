import React, { useState } from 'react';

import UserInput from '../UserInput/UserInput.jsx';

import UserView from '../UserView/UserView.jsx';

import './UserRegister.css' 


export function UserRegister(){

    const [userName, setUserName] = useState('');
    const [userHandle, setUserHandle] = useState('');

    const handleFormSubmit = (name, handle) => {
        setUserName(name);
        setUserHandle(handle);
    };

    return (
        <>
          <UserInput onFormSubmit={handleFormSubmit} />
          <UserView userName={userName} userHandle={userHandle} />
        </>
      );

}