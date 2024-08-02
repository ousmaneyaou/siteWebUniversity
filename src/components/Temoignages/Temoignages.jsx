import React, { useRef } from 'react'
import './Temoignages.css'
import nexticon from '../../assets/nexticons.jpg'
import backticon from '../../assets/back.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user5 from '../../assets/user4.jpg'
import user4 from '../../assets/user4.jpg'

const Temoignages = () => {

  const slider = useRef();
  let tx = 0;

const next = () => {
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}
const back = () => {
  if(tx < -0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}


  return (
    <div className='temoignages'>
      <img src={backticon} alt="" className='back-btn' onClick={back}/>
      <img src={nexticon} alt="" className='nex-btn'onClick={next}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Ousmane Yaou</h3>
                  <span>Etudiant, isi</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit ipsa voluptas vel harum repellendus, expedita doloribus dolorum rerum! Unde.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Ousmane Yaou</h3>
                  <span>Etudiant, isi</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit ipsa voluptas vel harum repellendus, expedita doloribus dolorum rerum! Unde.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user5} alt="" />
                <div>
                  <h3>Ousmane Yaou</h3>
                  <span>Etudiant, isi</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit ipsa voluptas vel harum repellendus, expedita doloribus dolorum rerum! Unde.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Ousmane Yaou</h3>
                  <span>Etudiant, isi</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit ipsa voluptas vel harum repellendus, expedita doloribus dolorum rerum! Unde.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Temoignages
