import React from 'react';

function Review() {
  return (
    <>
      <section id='review'>
        <div className='review-container'>
          <h2>REVIEW CLIENT</h2>
          <div className='line'></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque
            repellendus laboriosam, iste et eius.
          </p>

          <div className='client-container'>
            <div className='client-review'>
              <div className='client'>
                <img src='../src/assets/img/client1.jpg' alt='' />
                <div className='client-name'>
                  <p>Diet Expert</p>
                  <p>CFO</p>
                </div>
              </div>
              <div className='cilent-comment'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, sequi? Asperiores fugit possimus maiores, alias quidem
                  consectetur eligendi voluptas, totam aperiam aut aspernatur
                  molestias unde.
                </p>
              </div>
            </div>
            <div className='client-review'>
              <div className='client'>
                <img src='../src/assets/img/client2.jpg' alt='' />
                <div className='client-name'>
                  <p>Cardio Trainer</p>
                  <p>CEO</p>
                </div>
              </div>
              <div className='cilent-comment'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, sequi? Asperiores fugit possimus maiores, alias quidem
                  consectetur eligendi voluptas, totam aperiam aut aspernatur
                  molestias unde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
