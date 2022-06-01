import React from 'react'
import './education.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function EdModal1({closeEdModal1}) {
  return (
    <div className="information__modal">
      <div className="information__modal-content">
        <h3 className="education__title information__modal-title">GSIS <br /> (Gyeonggi Suwon International School)</h3>
        <span className='information__modal-close' onClick={() => closeEdModal1(false)}><AiOutlineCloseCircle /></span>
        
        <ul className="information__modal-informations">
          <li className='information__modal-information'>
            <p className='info-description'>2007 - 2019.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>Gyeonggi Suwon International School is based in Suwon, South Korea.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>I have completed my elementary, middle, and high school education at GSIS.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EdModal1