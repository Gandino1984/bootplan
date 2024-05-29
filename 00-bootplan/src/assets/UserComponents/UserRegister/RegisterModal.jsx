import React, { useState } from 'react';

import UserInput from '../UserInput/UserInput.jsx';

import AvatarInput from '../UserInput/AvatarInput.jsx';

import UserView from '../UserView/UserView.jsx';

import './RegisterModal.css' 


export function RegisterModal(){

    const [userName, setUserName] = useState('');

    const [userAvatar, setUserAvatar] = useState(''); 

    return(
        <>
          <UserInput onChange={setUserName} />
          <AvatarInput onChange={setUserAvatar} />
          <UserView userName={userName} userAvatar={userAvatar} />
        </>
      );

}

export default RegisterModal;