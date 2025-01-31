import React from 'react'
import './Navbar.css'
import logo from '../../assets/file.png'
import iconmenu from '../../assets/menueicon.jpg'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [collant, setCollant] = useState(false)

    useEffect(() => {
    window.addEventListener('scroll', ()=>{
        window.scrollY > 70 ? setCollant(true) : setCollant(false)
    })
    }, [])

    const [telMenu, setTelMenu] = useState(false)
    const toggleMenu = () =>{
        telMenu ? setTelMenu(false) : setTelMenu(true);
    }

  return (
    <nav className={`container ${collant ? 'couleurDeNav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={telMenu ? '' : 'petit-ecran'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programmes' smooth={true} offset={-260} duration={500}>Programme</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>A propos de nous</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='temoignages' smooth={true} offset={-260} duration={500}>Témoignages</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contactez nous</button></Link></li>
      </ul>
        <img src={iconmenu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
