import React, { useState } from 'react';

import './AvatarInput.css';

export function AvatarInput({onChange}) {
  
  function AvatarInputHandler(e){
    e.preventDefault();
    const avatar = e.target.value;
    onChange(avatar);
  }

  return (
        <>
          <input type="text" id="avatar" onChange={AvatarInputHandler} placeholder="@<Tu avatar aquí>" />
        </>
        
  );
}

export default AvatarInput;
