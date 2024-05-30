import React, { useState } from 'react';

// import './UserPasswordInput.css';


export function UserPasswordInput({onChange}) {
  
  function UserPasswordInputHandler(e){
    e.preventDefault();
    const password = e.target.value;
    onChange(password);
  }

  return (
        <>
          <label for="password">Tu contraseña: </label>
          <input
            type="password"
            id="password"
            onChange={UserPasswordInputHandler}
            placeholder="Tu contraseña aquí"
          />
        </>
            
  );
}

export default UserPasswordInput;

