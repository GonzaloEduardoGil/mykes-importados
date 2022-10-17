import React from 'react'
import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export const Item = ({productos}) => {
    const style ={
        width: window.innerHeight > 900 ? "20%" : "90%",
        justifyContent: "space-between",
        margin: 20,
      }

    
    return (
        <Card sx={{ maxWidth: 345 }}style={style}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="230"
            image={productos.foto}
            alt={productos.nombre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productos.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productos.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={'/producto/' + productos.id}>
          <Button size="small" color="primary">
            Ver detalles
          </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
