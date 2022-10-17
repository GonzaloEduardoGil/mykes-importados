import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) => {
    const style = {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
      }
    return (
      <div style={style}>
        {productos.map((producto)=>
        <Item key={producto.id} productos={producto}/>
        )}
      </div>
    )
}