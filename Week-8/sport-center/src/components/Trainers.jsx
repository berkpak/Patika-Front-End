import React from 'react';

function Trainers() {
  return (
    <>
      <section id='trainer'>
        <div className='trainer-container'>
          <h2>OUR BEST TRAINERS</h2>
          <div className='line'></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            dicta.
          </p>
          <div className='trainer-card-container'>
            <div className='trainer-card'>
              <img src='../src/assets/img/trainer1.jpg' alt='Trainer' />
              <div className='trainer-layer'>
                <h4>Lorem, ipsum.</h4>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
            <div className='trainer-card'>
              <div className='trainer-layer'>
                <h4>Lorem, ipsum.</h4>
                <p>Lorem, ipsum.</p>
              </div>
              <img src='../src/assets/img/trainer2.jpg' alt='Trainer' />
            </div>
            <div className='trainer-card'>
              <div className='trainer-layer'>
                <h4>Lorem, ipsum.</h4>
                <p>Lorem, ipsum.</p>
              </div>
              <img src='../src/assets/img/trainer3.jpg' alt='Trainer' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
