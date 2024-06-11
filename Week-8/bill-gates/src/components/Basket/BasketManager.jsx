import React, { useState } from 'react';
import Product from '../Product/Product.jsx';
import BasketCard from '../BasketCard/BasketCard.jsx';
import { products } from '../../../products.js';
import './BasketManager.css';

function BasketManager({ money, setMoney }) {
  const [basket, setBasket] = useState([]);

  const total = basket.reduce((acc, item) => {
    const product = products.find(p => p.id === item.id);
    return acc + product.price * item.amount;
  }, 0);

  return (
    <div className='basket-manager'>
      <div className='products-card'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            basket={basket}
            setBasket={setBasket}
            total={total}
            money={money}
            setMoney={setMoney}
          />
        ))}
      </div>
      <BasketCard basket={basket} products={products} total={total} />
    </div>
  );
}

export default BasketManager;
