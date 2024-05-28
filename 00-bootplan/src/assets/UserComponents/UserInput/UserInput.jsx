import React, { useState } from 'react';

import './UserInput.css'


export function UserInput() {
  console.log("RENDER: UserInput");
  
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    console.log(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', userName, 'Avatar:', avatar);
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };

  return (
    <div className='user-input-formContainer'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          placeholder="nombre de usuario"
        />
        <input
          type="text"
          value={avatar}
          onChange={handleAvatarChange}
          placeholder="avatar"
        />
        <input type="submit" value="CREAR" />
      </form>
    </div>
  );
}

export default UserInput;
