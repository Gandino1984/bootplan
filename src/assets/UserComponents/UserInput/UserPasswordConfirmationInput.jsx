import React, { useState } from 'react';

// import './UserPasswordConfirmationInput.css';


export function UserPasswordConfirmationInput({onChange}) {
  
  function UserPasswordConfirmationInputHandler(e){
    e.preventDefault();
    const password = e.target.value;
    onChange(password);
  }

  return (
        <input
          type="password"
          onChange={UserPasswordConfirmationInputHandler}
          placeholder="Confirma tu contraseña"
        />    
  );
}

export default UserPasswordConfirmationInput;

