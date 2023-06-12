import React from 'react'
import  "../Teams/Teams.css"
import Nav from '../Nav/Nav'

const Teams = ({teams}) => {
  return (<>
    <Nav/>
    <div className='container'>
      {teams.map((item,i) => {
        return (<li className='card' key={i}>
            <img className='logo' src={item.foto} alt='foto'></img>
            <h3 className='team-name'>{item.nombre}</h3>
        </li>)
      })}
    </div>
    </>
  )
}

export default Teams;