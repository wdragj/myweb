import React from 'react'
import './education.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function EdModal4({closeEdModal4}) {
  return (
    <div className="information__modal">
      <div className="information__modal-content">
        <h3 className="education__title information__modal-title">UW-Madison <br /> (University of Wisconsin-Madison)</h3>
        <span className='information__modal-close' onClick={() => closeEdModal4(false)}><AiOutlineCloseCircle /></span>
        
        <ul className="information__modal-informations">
          <li className='information__modal-information'>
            <p className='info-description'>Spring 2023~.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>Bachelor of Science in Computer Science.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>Returned as a sophomore in Spring 2023.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>Currently in progress for Bachelor of Science in Computer Science.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EdModal4