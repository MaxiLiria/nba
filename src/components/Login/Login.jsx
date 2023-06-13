import { useState } from "react"
import "./Login.css"
import Nav from "../Nav/Nav"

const initial_state = {
    email: "",
    password: ""
}

const Login = ({ loginUser, loginError }) => {
    const [formData, setFormdata] = useState(initial_state)
    const handleSubmitForm = (ev) => {
        loginUser(formData);
    }
    const handleInput = (ev) => {
        const { name, value } = ev.target
        setFormdata({ ...formData, [name]: value })
    }
    const handleCancel = () => {
        setFormdata(initial_state)
    }

    return (
        <div className="">
        <Nav/>

        
            <form  className="form" onSubmit={(ev) => ev.preventDefault()}>
            <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={handleInput} value={formData.email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleInput} value={formData.password} />
                <br />
                <input id="boton" type="submit" value="inicia sesion" onClick={handleSubmitForm} />

                <input id="boton2" type="submit" value="cancelar" onClick={handleCancel} />

                <h5 id="comentario">Debe iniciar sesion para continuar navegando en la pagina</h5>
            </form>
            {loginError ? <p style={{ color: "red" }}>{loginError}</p> : null}

            

        </div >
    )
}

export default Login



