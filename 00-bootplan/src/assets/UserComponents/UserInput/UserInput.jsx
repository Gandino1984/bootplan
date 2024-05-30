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
      {/* <label for="name">Escribe tu nombre aquí: </label> */}
      <input
            type="text"
            id="name"
            name="name"
            onChange={UserInputHandler}
            placeholder="Escribe tu nombre aquí"
      />
    </>
  )
}

export default UserInput;

