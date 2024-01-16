import React from 'react';
import Styles from './Header.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
    <h1>PATO RESTURANT</h1>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Blogs</a>
    <a href="">Contacts</a>
  </header>
  )
}


export default Header;
