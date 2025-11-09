import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h2>Welcome to Our Kids Clothing Store</h2>
      <Link to="/boys"><button className="btn">Shop Boys</button></Link>
      <Link to="/girls"><button className="btn">Shop Girls</button></Link>
    </div>
  );
}

export default Home;