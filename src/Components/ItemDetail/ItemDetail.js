import React from "react";

export const ItemDetail = ({productos}) =>{
    return(
        <div>
            <img src={productos.foto} alt={productos.nombre}></img>
            <h1>{productos.nombre}</h1>
            <span>{productos.descripcion}</span>
            <h2>{productos.precio}</h2>
        </div>
    )
}