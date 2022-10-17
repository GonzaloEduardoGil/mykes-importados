import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
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

    const URL_BASE = "https://634cd882acb391d34a8d42e7.mockapi.io/zapatos"
    //const URL_CAT = `${URL_BASE}/${id}`
    //no se como hacer esto

    useEffect(() => {
      const getProductos = async() =>{
      try{
        const resp = await fetch(URL_BASE);
        const data = await resp.json();
        setProductos(data);
      } catch {
        console.log("error");
      } finally{
        setCargar(false);
      }
    };
    getProductos();
    }, [id]);
  return (
    <main style={fondo}>
      <>
    <h2 style={style}>bienvenido a mi tiendita</h2>
    {
      <>
      {cargar ? <h2 style={style}>Cargando productos...</h2> : <ItemList productos={productos}/>}
      </>
    }
    </>
    </main>
  )
}
