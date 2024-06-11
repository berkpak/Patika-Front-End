import React from 'react';

function Purchase() {
  return (
    <>
      <section>
        <div className='purchase-container'>
          <h2>PURCHASE FROM US</h2>
          <div className='line'></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            exercitationem.
          </p>
          <div className='purchase-card-container'>
            <div className='purchase-card'>
              <img src='../src/assets/img/purchase1.jpg' alt='' />
              <h4>Kettlebell / 5kg</h4>
              <p>
                <span>89,99$</span>/ 59,99$
              </p>
              <p>
                <i className='fa-solid fa-cart-shopping'></i>Add To Chart
              </p>
            </div>
            <div className='purchase-card'>
              <img src='../src/assets/img/purchase2.jpg' alt='' />
              <h4>Treadmill</h4>
              <p>
                <span>899,99$</span>/ 599,99$
              </p>
              <p>
                <i className='fa-solid fa-cart-shopping'></i>Add To Chart
              </p>
            </div>
            <div className='purchase-card'>
              <img src='../src/assets/img/purchase3.jpg' alt='' />
              <h4>Adjustable Dumbbell</h4>
              <p>
                <span>89,99$</span>/ 59,99$
              </p>
              <p>
                <i className='fa-solid fa-cart-shopping'></i>Add To Chart
              </p>
            </div>
            <div className='purchase-card'>
              <img src='../src/assets/img/purchase4.jpg' alt='' />
              <h4>Kettlebell / 3kg</h4>
              <p>
                <span>89,99$</span>/ 59,99$
              </p>
              <p>
                <i className='fa-solid fa-cart-shopping'></i>Add To Chart
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Purchase;
