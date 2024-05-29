import React, { useState } from 'react';

// import './UserInput.css';

export default function AvatarInput({onChange}) {
  
  function AvatarInputHandler(e){
    e.preventDefault();
    const avatar = e.target.value;
    onChange(avatar);
  }

  return (
        <input
          type="text"
          onChange={AvatarInputHandler}
          placeholder="@ <Github/Telegram/Instagram...>"
        />
  );
}

