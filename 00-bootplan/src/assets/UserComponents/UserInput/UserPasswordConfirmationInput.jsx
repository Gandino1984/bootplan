import React, { useState } from 'react';

import './UserPasswordConfirmationInput.css';


export function UserPasswordConfirmationInput({onChange}) {
  
  function UserPasswordConfirmationInputHandler(e){
    e.preventDefault();
    const passwordRepeat = e.target.value;
    onChange(passwordRepeat);
  }

  return (
        <input 
        type="password" 
        id="passwordRepeat" 
        name="passwordRepeat"
        onChange={UserPasswordConfirmationInputHandler} 
        placeholder="Confirma tu contraseña" 
        />    
  );
}

export default UserPasswordConfirmationInput;

