import React, { useState, useEffect } from 'react';

import './BarraBusqueda.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const storedPhoto = localStorage.getItem('userPhoto') || "https://iconduck.com/icons/6491/profile-default";
      
    

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        //llamada a la api
    
    
      };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    return (
      <header className="header">
        <div className="menu">
          <button className="menu-button" onClick={toggleMenu}>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
          {menuOpen && (
            <div className="menu-content">
              <a href="#">Invitar usuario</a>
            </div>
          )}
        </div>
        <input
          type="text"
          className="search-box"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
         <button className="button" onClick={handleSubmit}>
          
        </button> 

   

          <img src={storedPhoto} alt="Usuario" className="user-photo" />

      </header>
    );
  };
  
  export default Header;