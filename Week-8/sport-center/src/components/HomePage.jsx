import React from 'react';

function HomePage() {
  return (
    <>
      <section className='homePage' id='homePage'>
        <div className='homePage-container'>
          <div className='homePage-section'>
            <h4>POWERFULL</h4>
            <h1>Group</h1>
            <h1>Practice</h1>
            <h1>With Trainer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              unde quae, minus voluptas nesciunt quia necessitatibus quos iure,
              quas voluptatem, rem esse quidem numquam. Totam veritatis deserunt
              quis magni velit vero necessitatibus, quaerat facere sed, error
              voluptas ratione, sit distinctio quidem quo natus accusantium
              consequatur. Excepturi asperiores fuga autem laudantium.
            </p>
          </div>
          <div className='homePage-buttons'>
            <button className='signUp-btn'>Sign Up</button>
            <button className='details-btn'>Details</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
