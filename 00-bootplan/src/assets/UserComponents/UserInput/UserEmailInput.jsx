import React, { useState } from 'react';

// import './UserInput.css';


export function UserEmailInput({onChange}) {
  
  function UserEmailInputHandler(e){
    e.preventDefault();
    const email = e.target.value;
    onChange(email);
  }

  return (
    <>
      <input
            type="text"
            id="email"
            name="email"
            onChange={UserEmailInputHandler}
            placeholder="Escribe tu email aquí"
      />
    </>
  )
}

export default UserEmailInput;

