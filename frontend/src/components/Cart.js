import React from 'react';

function Cart({ cart, setCart }) {
  return (
    <div className="container">
      <h2>Cart</h2>
      {cart.map(item => <p key={item.id}>{item.name} - ${item.price}</p>)}
      <button className="btn">Checkout</button>
    </div>
  );
}

export default Cart;