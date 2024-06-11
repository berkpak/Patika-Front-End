import React from 'react';

function Bmi() {
  return (
    <>
      <section>
        <div className='bmi-container'>
          <div className='calculator-container'>
            <h1>BMI Calculator</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              perspiciatis blanditiis consectetur consequatur possimus?
              Accusamus voluptate similique cupiditate tempore quaerat, vel
              minima doloremque, harum perspiciatis atque, quo qui ipsum
              aspernatur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              sapiente pariatur modi amet repellat, doloremque deserunt quae
              possimus totam nobis.
            </p>
            <input
              id='height'
              className='height'
              type='text'
              placeholder='Your height'
            />
            <span>cm</span>
            <input
              id='weight'
              className='weight'
              type='text'
              placeholder='Your Weight'
            />
            <span>kg</span>
          </div>
          <div className='bmi-image'>
            <h4>Your BMI</h4>
            <img src='../src/assets/img/bmi-index.jpg' alt='' />
            <div className='arrow'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bmi;
