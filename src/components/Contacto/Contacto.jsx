import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import "./Contacto.css"
import { API } from '../../Services/Api.js'

const initial_state = {
    nombre: "",
    email: "",
    comentario: ""
}

const Contacto = (value) => {
    
    const [formState, setFormState] = useState(initial_state);

    
    const handleInput = (ev) => {
        const { name, value } = ev.target;
        
        setFormState({ ...formState, [name]: value })

    }
    const handleClick = () => {
        API.post("/contactos", formState)
            .then((res) => {
                console.log("Mensaje enviado")
            })
    }



  return (
    <div>
    <Nav/>
      <form className='form' onSubmit={(ev) => ev.preventDefault()}>
      <h2>Contactanos</h2>
    <label htmlFor="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.nombre}/>
    
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" onChange={handleInput} value={formState.email}/>
    
    <label htmlFor="comentario">Comentario:</label>
    <textarea id="comentario" name="comentario" onChange={handleInput} value={formState.comentario}></textarea>
    
    <input type="submit" value="Enviar" name='submit' id='boton' onClick={handleClick}/>
    </form>
        
    </div>
  )
}

export default Contacto




   
  
   