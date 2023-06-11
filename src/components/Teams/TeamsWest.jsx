import React from 'react'
import { useParams } from 'react-router-dom';


const TeamsWest = ({teamWest}) => {
    const {conferencia}= useParams()
    console.log(conferencia);

    const west = teamWest.filter((team)=>{

        return team.conferencia === "oeste"
    })
    console.log(west);
  return (
    <div>
        <h2>WEST</h2>
        {west.map((team,i) => {
            return (<ul key={i}>
               <li> <img src={team.foto} alt='foto'/>
                <h3>{team.nombre}</h3>
                </li>
            </ul>)
        } )}
    </div>
  )
}

export default TeamsWest