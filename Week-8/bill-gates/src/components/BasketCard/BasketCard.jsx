import React from 'react';
import BasketItem from '../BasketItem/BasketItem';
import './BasketCard.css';

function BasketCard({ basket, products, total }) {
  if (basket.length === 0) {
    return null;
  }

  return (
    <div className='basket-card'>
      <h2>Your Receipt</h2>
      {basket.map(item => (
        <BasketItem
          key={item.id}
          item={item}
          product={products.find(p => p.id === item.id)}
        />
      ))}
      <hr />
      <div className='total'>Total: ${total}</div>
    </div>
  );
}

export default BasketCard;
