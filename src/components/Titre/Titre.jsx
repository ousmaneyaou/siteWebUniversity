import React from 'react'
import './Titre.css'

const Titre = ({sousTitre, titre}) => {
  return (
    <div className='titre'>
      <p>{sousTitre}</p>
      <h2>{titre}</h2>
    </div>
  )
}

export default Titre
