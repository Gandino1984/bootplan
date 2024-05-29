import React, { useState } from 'react';
import UserView from '../UserView/UserView.jsx';

import './UserInput.css';


export function UserInput() {
  const [userName, setUserName] = useState('');
  const [userAvatar, setAvatar] = useState('');

  

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    console.log(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='user-input-formContainer'>
      <UserView userName={userName} userHandle={userAvatar}/ >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          placeholder="nombre de usuario"
        />
        <input
          type="text"
          value={userAvatar}
          onChange={handleAvatarChange}
          placeholder="avatar"
        />
        <input type="submit" value="CREAR" />
      </form>
    </div>
  );
}

export default UserInput;
