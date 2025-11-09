import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image || 'https://via.placeholder.com/250'} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;