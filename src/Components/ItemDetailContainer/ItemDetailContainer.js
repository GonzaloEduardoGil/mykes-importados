import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 60,
    }
    const fondo ={
      backgroundColor: "blue",
    }
    const [productos, setProductos] = useState([]);
    const [cargar, setCargar] = useState(true);

    const {id} = useParams();

    useEffect(() =>{
        const getProductos = async () => {
            try{
                const resp = await fetch("https://634cd882acb391d34a8d42e7.mockapi.io/zapatos/" + id)
                const data = await resp.json();
                setProductos(data);
            } catch{
                console.log("error");
            } finally{
                setCargar(false);
            }
        };
        getProductos();
    }, [])
  return (
    <main style={fondo}>
      <>
      {cargar ? <h2 style={style}>Cargando productos...</h2> : <ItemDetail productos={productos}/>}
      </>
    </main>
  )
}