import React, { useState, useEffect } from 'react';

import './BarraBusqueda2.css';

const Barra2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');




  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {

    // Llamada a la api



    

  };

  return (
    <header className="header">

      <img src="https://w7.pngwing.com/pngs/272/584/png-transparent-house-computer-icons-home-building-united-states-free-home-angle-building-text-thumbnail.png" alt="inicio" className="inicio" />

      <div className="left-container">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Buscar Proyecto"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            🔍
          </button>
        </div>
        
      </div>
    </header>
  );
};


export default Barra2;