import React, { useState, useEffect } from 'react';

import './BarraBusqueda1.css';

const Barra1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userPhoto, setUserPhoto] = useState('https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png');

  useEffect(() => {
    const storedPhoto = localStorage.getItem('userPhoto');
    if (storedPhoto) {
      setUserPhoto(storedPhoto);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {

    // Llamada a la api



    

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
      <div className="right-container">
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
        <img src={userPhoto} alt="Usuario" className="user-photo" />
      </div>
    </header>
  );
};



export default Barra1;