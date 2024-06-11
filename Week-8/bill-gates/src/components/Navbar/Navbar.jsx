import React from 'react';
import './Navbar.css';

function Navbar({ money }) {
  return <div className='navbar'>${money}</div>;
}

export default Navbar;
