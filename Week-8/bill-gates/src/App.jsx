import React, { useState } from 'react';
import BasketManager from './components/Basket/BasketManager';
import Navbar from './components/Navbar/Navbar';
import BasketCard from './components/BasketCard/BasketCard';
import { products } from '../products';
import BasketItem from './components/BasketItem/BasketItem';

function App() {
  const [money, setMoney] = useState(100000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <>
      <Navbar money={money} />
      <BasketManager money={money} setMoney={setMoney} />
      <BasketCard basket={basket} products={products} total={total} />
    </>
  );
}

export default App;
