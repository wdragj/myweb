import React from 'react'
import './education.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function EdModal3({closeEdModal3}) {
  return (
    <div className="information__modal">
      <div className="information__modal-content">
        <h3 className="education__title information__modal-title">KAIST <br /> (Korea Advanced Institute of Science and Technology)</h3>
        <span className='information__modal-close' onClick={() => closeEdModal3(false)}><AiOutlineCloseCircle /></span>
        
        <ul className="information__modal-informations">
          <li className='information__modal-information'>
            <p className='info-description'>March - September 2022.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>Studied at KAIST, after being discharged from South Korean military service.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>Studied data structures, algorithms, OOP, web development, machine learning, and deep learning at KAIST.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EdModal3