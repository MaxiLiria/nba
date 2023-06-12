import React from 'react'
import "./Teams.css"
import Nav from '../Nav/Nav';
import "../Nav/Nav.css"
const TeamsWest = ({teamWest}) => {
    const teamsWest = teamWest.filter(team => team.conferencia === "Oeste");
    
    return (<>
      <div>
      <Nav/>
      </div>
      <div className='container'>
        {teamsWest.map((item,i) => {
          return (<li className='card' key={i}>
              <img className='logo' src={item.foto} alt='foto'></img>
              <h3 className='team-name'>{item.nombre}</h3>
          </li>)
        })}
      </div>
      </>
    )
  }
  export default TeamsWest