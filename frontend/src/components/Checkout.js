import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_...'); // Replace with your publishable key

function Checkout({ cart }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await axios.post('http://localhost:5000/api/orders/checkout', { items: cart }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    window.location.href = res.data.url;
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <button className="btn" onClick={handleCheckout}>Pay with Stripe</button>
    </div>
  );
}

export default Checkout;