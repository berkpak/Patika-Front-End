import React from 'react';

function Classes() {
  return (
    <>
      <section id='classes' className='classes'>
        <div className='class-container'>
          <h2>OUR CLASSES</h2>
          <div className='line'></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            dicta.
          </p>
          <div className='classes-btns'>
            <button id='yoga'>Yoga</button>
            <button id='group'>Group</button>
            <button id='solo'>Solo</button>
            <button id='stretch'>Stretching</button>
          </div>
          <div className='class-content'>
            <div className='class-group-content'>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                consectetur libero vero consequuntur voluptatibus dignissimos
                blanditiis aperiam saepe? Dolore facere illum optio fuga ut vero
                in iste repellat enim illo? blanditiis aperiam saepe? Dolore
                facere illum optio fuga ut vero in iste repellat enim illo?
              </p>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Saturday-Sunday: 10:00am - 12:00am</p>
              <p>Monday-Tuesday: 8:00am - 12:00am</p>
              <p>Wednesday-Friday: 8:00am - 10:00am</p>
            </div>
            <img src='../src/assets/img/yoga.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Classes;
