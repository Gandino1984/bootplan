import React, { useState } from 'react';

import './ProjectDescriptionInput.css';


export function ProjectDescriptionInput({onChange}) {
  
  function ProjectDescriptionInputHandler(e){
    e.preventDefault();
    const description = e.target.value;
    onChange(description);
  }

  return (
    <>
      <input
            type="textarea"
            id="description"
            name="description"
            rows="4"
            cols="50"
            onChange={ProjectDescriptionInputHandler}
            placeholder="Escribe una descripción del proyecto"
      />
    </>
  )

}
export default ProjectDescriptionInput;

