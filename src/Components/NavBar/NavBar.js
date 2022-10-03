import React from 'react';
import './NavBar.css'
import {CartWidget} from  '../CartWidget/CartWidget.js'

const NavBar = () => {
  return (
    <header>
      <h1>Mykes importados</h1>
      <nav>
        <ul>
          <a href="">categoria 1</a>
          <a href="">categoria 2</a>
          <a href="">categoria 3</a>
          <a href="">categoria 4</a>
        </ul>
      </nav>
      <CartWidget></CartWidget>
    </header>
  );
}

export default NavBar;