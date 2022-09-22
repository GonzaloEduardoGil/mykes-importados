import React from 'react';
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <header>
        <img src="" alt="" />
        <h1>tienda</h1>
        <nav>
            <ul>
            <a href="">categoria 1</a>
            <a href="">categoria 2</a>
            <a href="">categoria 3</a>
            <a href="">categoria 4</a>
            </ul>
        </nav>
        <ShoppingCartIcon color='primary' fontSize='large'/>
    </header>
  );
}

export default Header;