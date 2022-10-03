import React from 'react';

export const CartWidget = () => {
    const style = {
        width: 70,
        marginRight: 50,
    }
  return (
    <a href=""><img style={style} src={require('../../img/icono-de-carro.png')} alt="icono de carrito"/></a>
  )
}