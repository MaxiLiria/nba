import React from 'react'
import  "../Teams/Teams.css"

const Teams = ({teams}) => {
  return (
    <div className='container'>
      {teams.map((item,i) => {
        return (<li className='container-foto' key={i}>
            <img className='foto' src={item.foto} alt='foto'></img>
            <h3>{item.nombre}</h3>
        </li>)
      })}
    </div>
  )
}

export default Teams;