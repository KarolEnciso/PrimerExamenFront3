import React from 'react';
import "./card.css"

const Card = ({nombre, paisFavorito}) => {
  return (
    <div className='contenedorCard'>
      <h3>Hola {nombre}!</h3>
      <h3>Sabémos que tu país de Latinoamérica favorito para viajar es:</h3>
      <h3 className='colorFavorito'>{paisFavorito}</h3>
    </div>
  )
}

export default Card
