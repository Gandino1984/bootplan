import React, { useState } from 'react';
import './CreateProject.css';



const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    //llamada a la api


  };

  return (
    <div className="form-container user-register-modalMainContainer">
      <h1 ClassName="title-userModal">Crear nuevo proyecto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre del Proyecto</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Crear Proyecto</button>
      </form>
    </div>
  );
};

export default CreateProject;