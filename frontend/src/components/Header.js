import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#333', color: 'white', padding: '10px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Kids Clothing Store</h1>
        <nav>
          <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
          <Link to="/boys" style={{ margin: '0 10px', color: 'white' }}>Boys</Link>
          <Link to="/girls" style={{ margin: '0 10px', color: 'white' }}>Girls</Link>
          <Link to="/login" style={{ margin: '0 10px', color: 'white' }}>Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;