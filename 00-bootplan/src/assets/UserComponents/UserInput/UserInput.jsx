import React, { useState } from 'react';

import './UserInput.css';


export default function UserInput({onChange}) {
  
  function UserInputHandler(e){
    e.preventDefault();
    const user = e.target.value;
    onChange(user);
  }

  return (
        <input
          type="text"
          onChange={UserInputHandler}
          placeholder="Nombre de usuario aquí"
        />
        
  );
}

