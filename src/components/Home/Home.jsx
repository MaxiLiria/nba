import React from 'react'
import Nav from "../Nav/Nav"
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <Nav/>
      <section className='container-img'>
      <article className='cont-img'> <Link to={"/east"}><img className='img-home' src='https://www.nbamaniacs.com/wp-content/uploads/2013/03/Eastern.gif' alt='foto east'/></Link></article>

      <article className='cont-img'> <Link to={"/west"}> <img className='img-home' src='https://diarium.usal.es/javivazquez/files/2014/11/Conferencia-Oeste-NBA.gif' alt='foto west'/></Link></article>
      </section>
    </div>
  )
}

export default Home


