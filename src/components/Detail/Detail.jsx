import { useParams } from 'react-router-dom'
import "./Detail.css"
import Nav from '../Nav/Nav'


const Detail = ({list}) => {

    const {  nombre } = useParams()
    console.log(nombre)

    const findTeam = list.find((item) => {
        return item.nombre === nombre
    })

    console.log(findTeam)
    return (<>
        <Nav/>
        <div className='div-card'>
        <div className='card-detail'>
            <img className='logo' src={findTeam.foto} alt="foto" />
            <h3 className='team-name'>{findTeam.nombre}</h3>
            <h4>{findTeam.conferencia}</h4>
        </div>
        
        <div className='div-players'>
                <h2 className='team-name'>Jugadores</h2>
             <p className="players" >{findTeam.jugadores}</p>   
                
        </div>
        </div>
        </>
    )
}

export default Detail