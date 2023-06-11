import React from 'react'
import Nav from "../Nav/Nav"
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {

  


  return (
    <div>
      <Nav/>
      <section className='container-img'>
        <article> <Link to={"../Teams/TeamsWest.jsx"}> <img className='img-home' src='https://diarium.usal.es/javivazquez/files/2014/11/Conferencia-Oeste-NBA.gif' alt='foto west'/></Link></article>
        
        <article> <img className='img-home' src='https://www.nbamaniacs.com/wp-content/uploads/2013/03/Eastern.gif' alt='foto east'/></article>
      </section>
    </div>
  )
}

export default Home


