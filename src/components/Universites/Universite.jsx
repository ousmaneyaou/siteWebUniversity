import React from 'react'
import './Universite.css'
import callery1 from '../../assets/livre2.avif'
import callery2 from '../../assets/premium_photo-1678565546470-e94fb3e9501e.avif'
import callery3 from '../../assets/images (2).jpg'
import callery4 from '../../assets/images.jpg'
import dark_arrow from '../../assets/next.png'

const Universite = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={callery1} alt="" className='img34'/>
        <img src={callery2} alt="" className='img34'/>
        <img src={callery3} alt="" className='img34'/>
        <img src={callery4} alt="" className='img34'/>
      </div>
      <button className='btn dark-btn'>voir plus ici<img src={dark_arrow} alt="" /></button>
    </div>
  )
}

export default Universite
