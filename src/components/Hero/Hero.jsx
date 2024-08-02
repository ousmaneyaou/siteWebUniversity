import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/next.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-texe'>
            <h1>Nous assurons une meilleure éducation pour un monde meilleur.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vitae voluptates sit eligendi excepturi eius maxime ex itaque architecto inventore ducimus.</p>
            <button className='btn'>En savoir plus <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
