import React, { useState } from 'react';

import './ProjectInput.css';


export function ProjectInput({onChange}) {
  
  function ProjectInputHandler(e){
    e.preventDefault();
    const project = e.target.value;
    onChange(project);
  }

  return (
    <>
      <input
            type="text"
            id="project"
            name="project"
            onChange={ProjectInputHandler}
            placeholder="Escribe el nombre del proyecto aquí"
      />
    </>
  )

}

export default UserInput;

