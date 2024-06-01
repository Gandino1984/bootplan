import React, { useState } from 'react';

import './ProjectSearchInput.css';


export function ProjectSearchInput({onChange}) {
  
  function ProjectSearchInputHandler(e){
    e.preventDefault();
    const projectSearch = e.target.value;
    onChange(projectSearch);
  }

  return (
    <>
      <input type="text" id="projectSearch" name="projectSearh" onChange={ProjectSearchInputHandler} placeholder="Nombre del proyecto" />
    </>
  )
}

export default ProjectSearchInput;