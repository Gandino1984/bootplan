import React, { useState } from 'react';

import './UserInput.css';


export function UserInput({onChange}) {
  
  function UserInputHandler(e){
    e.preventDefault();
    const user = e.target.value;
    onChange(user);
  }

  return (
    <>
      <input type="text" id="name" name="name" onChange={UserInputHandler} placeholder="Tu nombre aquí" />
    </>
  )
}

export default UserInput;

