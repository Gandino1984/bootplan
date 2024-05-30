import React, { useState } from 'react';

// import './AvatarInput.css';

export function AvatarInput({onChange}) {
  
  function AvatarInputHandler(e){
    e.preventDefault();
    const avatar = e.target.value;
    onChange(avatar);
  }

  return (
        <>
          <label for="avatar">Tu Avatar: </label>
          <input
            type="text"
            id="avatar"
            onChange={AvatarInputHandler}
            placeholder="@ <Github/Telegram/Instagram...>"
          />
        </>
        
  );
}

export default AvatarInput;