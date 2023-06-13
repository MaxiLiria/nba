import React from 'react'
import "./Teams.css"
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const TeamsEast = ({teamEast}) => {
    const east = teamEast.filter(team => team.conferencia === "Este");
    
    return (<>
    <Nav/>
      <div className='container'>
        {east.map((item,i) => {
          return (
              <li className='card' key={i}>
              <Link to={`/east/${item.nombre}`}>
              <img className='logo' src={item.foto} alt='foto'></img>
              <h3 className='team-name'>{item.nombre}</h3></Link>
              </li>
            )
        })}
      </div>
      </>
    )
  }
  export default TeamsEast
  