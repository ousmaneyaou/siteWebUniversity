import React from 'react'
import './About.css'
import aboutimag from '../../assets/livre.avif'
import playicon from '../../assets/iconplay.png'

const About = ({setPlaystate}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutimag} alt="" className='aboutimg'/>
            <img src={playicon} alt="" className='playicon'
            onClick={ () => {setPlaystate(true)}}/>
        </div>
        <div className="about-right">
            <h3>à propos de l'université</h3>
            <h2>former aujourd'hui les leaders de demain</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Dicta fuga natus tempora neque consequuntur? Nam tempore vel est incidunt 
                iste neque ab repellat quos, vitae reiciendis facilis error minus at.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Modi numquam harum explicabo non itaque! Laboriosam.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem excepturi 
                voluptates mollitia quo rem natus! Saepe rerum, ratione accusantium, 
                cum maiores beatae delectus veniam quas in amet hic minima.
            </p>
        </div>
      
    </div>
  )
}

export default About
