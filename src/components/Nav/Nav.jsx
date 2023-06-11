import React from 'react'
import { Link } from 'react-router-dom'
import  "./Nav.css"

const Nav = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/">TEAMS</Link></li>
                <li><Link to="/">PLAYERS</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav