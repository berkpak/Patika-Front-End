import React from 'react';

function navbarScroll() {
  let navbar = document.querySelector('.navbar');
  let scrollValue = window.scrollY;
  if (scrollValue < 800) {
    navbar.classList.remove('navbarScroll');
  } else {
    navbar.classList.add('navbarScroll');
  }
}
window.addEventListener('scroll', navbarScroll);

function Header() {
  return (
    <div>
      <header id='home'>
        <nav className='navbar'>
          <div className='logo'>
            <img src='../src/assets/img/logo.png' alt='Logo' />
          </div>

          <input type='checkbox' className='menu-btn' id='menu-btn' />
          <label htmlFor='menu-btn' className='menu-icon'>
            <i className='fa-solid fa-bars'></i>
          </label>
          <div className='nav-menu'>
            <a href='#home'>Home</a>
            <a href='#classes'>Classes</a>
            <a href='#trainer'>Trainer</a>
            <a href='#review'>Review</a>
            <a href='#contact'>Contact</a>
            <a href='' className='joinUs'>
              Join Us
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
