import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <div className='footer'>
          <div className='logo'>
            <img src='../src/assets/img/logo.png' alt='Logo' />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            provident blanditiis sit tempora expedita aut hic, molestias fugit
            consequuntur est.
          </p>

          <div className='footer-info'>
            <div className='info'>
              <h3>Information</h3>
              <a href='#'>About Us</a>
              <a href='#'>Classes</a>
              <a href='#'>Blog</a>
              <a href='#'>Contact</a>
            </div>
            <div className='links'>
              <h3>Helpful Links</h3>
              <a href='#'>Services</a>
              <a href='#'>Supports</a>
              <a href='#'>Terms & Condition</a>
              <a href='#'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
