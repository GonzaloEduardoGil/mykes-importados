import React from 'react';
import './NavBar.css'
import {CartWidget} from  '../CartWidget/CartWidget.js'
import {Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const categorias = [
    { nombre: "zapatos", id: 0, ruta: "/categoria/zapatos" },
    { nombre: "botas", id: 1, ruta: "/categoria/botas" },
    { nombre: "zapatillas", id: 2, ruta: "/categoria/zapatillas" },
    { nombre: "ojotas", id: 3, ruta: "/categoria/ojotas" },
  ]
  return (
    <header>
      <Link to="/">
      <h1>Mykes importados</h1>
      </Link>
      <nav>
        {categorias.map((categoria) => {
        return(
          <NavLink
            key={categoria.id}
            to={categoria.ruta}
            >
              {categoria.nombre}
          </NavLink>
        );
        })}
      </nav>
      <Link to="/cart">
      <CartWidget></CartWidget>
      </Link>
    </header>
  );
}

export default NavBar;