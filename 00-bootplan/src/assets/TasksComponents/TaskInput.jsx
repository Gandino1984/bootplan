import React, { useState } from 'react';

// import './UserInput.css';


export function TaskInput({onChange}) {
  
  function taskInputHandler(e){
    e.preventDefault();
    const task = e.target.value;
    onChange(task);
  }

  return (
    <>
      <input type="text" id="name" name="name" onChange={taskInputHandler} placeholder="Escribe una tarea" />
    </>
  )
}

export default UserInput;

