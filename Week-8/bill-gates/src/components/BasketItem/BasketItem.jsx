import React from 'react';
import './BasketItem.css';

function BasketItem({ item, product }) {
  return (
    <div className='basket-item'>
      {product.title} x {item.amount} = ${product.price * item.amount}
    </div>
  );
}

export default BasketItem;
