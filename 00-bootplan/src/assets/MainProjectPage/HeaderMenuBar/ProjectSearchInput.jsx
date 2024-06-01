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
      {/* <span className='projectSearchLabel'>Buscar proyecto: </span> */}
      <input className='projectSearchInput' type="text" id="projectSearch" name="projectSearh" onChange={ProjectSearchInputHandler} placeholder="Buscar proyecto" />
    </>
  )
}

export default ProjectSearchInput;