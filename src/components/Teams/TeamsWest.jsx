import React from 'react'
import "./Teams.css"
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const TeamsWest = ({teamWest}) => {
    const west = teamWest.filter(team => team.conferencia === "Oeste");
    
    return (<>
    <Nav/>
      <div className='container'>
        {west.map((item,i) => {
          return (
              <li className='card' key={i}>
              <Link to={`/west/${item.nombre}`}>
              <img className='logo' src={item.foto} alt='foto'></img>
              <h3 className='team-name'>{item.nombre}</h3></Link>
              </li>
            )
        })}
      </div>
      </>
    )
  }
  export default TeamsWest