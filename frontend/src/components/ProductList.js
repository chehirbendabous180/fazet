import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${category}`).then(res => setProducts(res.data));
  }, [category]);

  return (
    <div className="container">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Clothing</h2>
      <div className="grid">
        {products.map(product => <ProductCard key={product._id} product={product} />)}
      </div>
    </div>
  );
}

export default ProductList;