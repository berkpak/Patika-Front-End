import './Product.css';
import React from 'react';

function Product({ product, basket, setBasket, total, money, setMoney }) {
  const basketItem = basket.find(item => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find(item => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter(item => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { id: product.id, amount: 1 }]);
    }
    setMoney(money - product.price);
  };

  const removeBasket = () => {
    const currentBasket = basket.find(item => item.id === product.id);
    const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
    setMoney(money + product.price);
  };

  return (
    <div className='product'>
      <div className='image'>
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <div className='price'>${product.price}</div>
      <div className='buttons'>
        <button className='sell' onClick={removeBasket} disabled={!basketItem}>
          Sell
        </button>
        <span className='amount'>{(basketItem && basketItem.amount) || 0}</span>
        <button
          className='buy'
          onClick={addBasket}
          disabled={product.price > money}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
