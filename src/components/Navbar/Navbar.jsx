import React from 'react'
import './Navbar.css'
import logo from '../../assets/file.png'
import { useState, useEffect } from 'react'

const Navbar = () => {

    const [collant, setCollant] = useState(false)

    useEffect(() => {
    window.addEventListener('scroll', ()=>{
        window.scrollY > 70 ? setCollant(true) : setCollant(false)
    })
    }, [])

  return (
    <nav className={`container ${collant ? 'couleurDeNav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Programme</li>
        <li>A propos de nous</li>
        <li>Campus</li>
        <li>Témoignages</li>
        <li><button className='btn'>Contactez nous</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
