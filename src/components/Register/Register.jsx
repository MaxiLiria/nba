import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import "../Contacto/Contacto.css"
import { API } from '../../Services/Api.js'

const initial_state = {
    email: "",
    password: "",
}

const Register = () => {
    
    const [formState, setFormState] = useState(initial_state);

    
    const handleInput = (ev) => {
        const { name, value } = ev.target;
        
        setFormState({ ...formState, [name]: value })

    }
    const handleClick = () => {
        API.post("/users/register", formState)
            .then((res) => {

              alert("Usuario creado, sera redirigido para loguerse")
              
              setTimeout(() => {
                window.location.href = "/login"
              }, 1000);
            })
    }



  return (
    <div>
    <Nav/>
      <form className='form' onSubmit={(ev) => ev.preventDefault()}>
      <h2>Registrate</h2>

      <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" onChange={handleInput} value={formState.email}/>


    <label htmlFor="nombre">Password:</label>
    <input type="password" id="nombre" name="password" onChange={handleInput} value={formState.password}/>
    
    
    
    <input type="submit" value="Enviar" name='submit' id='boton' onClick={handleClick}/>
    </form>
        
    </div>
  )
}

export default Register