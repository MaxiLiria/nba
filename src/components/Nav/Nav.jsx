import React from 'react'
import { Link } from 'react-router-dom'
import  "./Nav.css"

const Nav = () => {
  return (
    <div>
        <nav className='nav'>
        <div>
            <ul>
                <li><Link className='li' to="/">HOME</Link></li>
                <li><Link className='li' to="/teams">TEAMS</Link></li>
                <li><Link className='li' to="/players">PLAYERS</Link></li>
                <li><Link className='li' to="/contacto">CONTACTO</Link></li>
                </ul>
                </div>
                <div className='div-nav'>
                <ul>
                <li> <Link className='li' to="/profile">PERFIL </Link></li>
                <li><Link className='li' to="/register">REGISTER</Link></li>
                <li><Link className='li' to="/login">LOGIN</Link></li>
                </ul>
                </div>
        </nav>
    </div>
  )
}

export default Nav