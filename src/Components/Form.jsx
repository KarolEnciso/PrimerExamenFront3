import React, { useState } from 'react'
import Card from './Card'
import "./form.css"

function Form() {
    const [user, setUser] = useState({
        nombre: "",
        paisOrigen: "",
        paisFavorito: ""
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(user.nombre.length >= 3 && user.nombre.charAt(0) !== " " && user.paisOrigen.length > 6){
            setShow(true)
            setError(false)
        } else {
            setShow(false)
            setError(true)
        }
    }

  return (
    <div className='form'>
        
        <h1>País favorito</h1>  

      <form onSubmit={handleSubmit}>

        <label className='label' >Ingresa tu nombre completo: </label>
        <input type="text" value={user.nombre} onChange={(e) => setUser({...user,nombre: e.target.value})}/>
        <label className='label' >Ingresa país de origen: </label>
        <input type="text" value={user.paisOrigen} onChange={(e) => setUser({...user,paisOrigen: e.target.value})}/>
        
        <select className='select' value={user.paisFavorito} onChange={(e) => setUser({...user,paisFavorito: e.target.value})}>
            <option value="">Selecciona el país de Latinoamérica te gustaría viajar: </option>
            <option value="Colombia">Colombia</option>
            <option value="Argentina">Argentina</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Chile">Chile</option>
            <option value="Brasil">Brasil</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Peru">Perú</option>
            <option value="Venezuela">Venezuela</option>
        </select>

        <button className='button'>Enviar</button>

    </form>

      {error && "Por favor chequea que la información sea correcta"}
      {show && <Card nombre={user.nombre} paisFavorito={user.paisFavorito}/>}

    </div>
  )
}

export default Form
