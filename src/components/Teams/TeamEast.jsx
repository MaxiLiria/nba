import React from 'react'
import "./Teams.css"
import Nav from '../Nav/Nav';

const TeamsEast = ({teamEast}) => {
    const east = teamEast.filter(team => team.conferencia === "Este");
    
    return (<>
    <Nav/>
      <div className='container'>
        {east.map((item,i) => {
          return (<li className='card' key={i}>
              <img className='logo' src={item.foto} alt='foto'></img>
              <h3 className='team-name'>{item.nombre}</h3>
          </li>)
        })}
      </div>
      </>
    )
  }
  export default TeamsEast
  