import React from 'react'
import './Programmes.css'
import programmes1 from '../../assets/téléchargement.jpg'
import programmes2 from '../../assets/propre.avif'
import programmes3 from '../../assets/photo-1512758017271-d7b84c2113f1.avif'
import programmes1Icons from '../../assets/logo1.jpg'
import programmes2Icons from '../../assets/logo2.png'
import programmes3Icons from '../../assets/logo3.png'


const Programmes = () => {
  return (
    <div className='programmes'>
        <div className='programme'>
            <img src={programmes1} alt="" />
            <div className="caption">
                <img src={programmes1Icons} alt="" />
                <p>Assistance</p>
            </div>
        </div>
        <div className='programme'>
            <img src={programmes2} alt="" />
            <div className="caption">
                <img src={programmes2Icons} alt="" />
                <p>Codage</p>
            </div>
        </div>
        <div className='programme'>
            <img src={programmes3} alt="" />
            <div className="caption">
                <img src={programmes3Icons} alt="" />
                <p>Daily suivi</p>
            </div>
        </div>
    </div>
  )
}

export default Programmes
