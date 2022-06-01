import React from 'react'
import './work.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function WorkModal4({closeWorkModal4}) {
  return (
    <div className="information__modal">
      <div className="information__modal-content">
        <h3 className="education__title information__modal-title">Work 4 <br /> (Work 4)</h3>
        <span className='information__modal-close' onClick={() => closeWorkModal4(false)}><AiOutlineCloseCircle /></span>
        
        <ul className="information__modal-informations">
          <li className='information__modal-information'>
            <p className='info-description'>Year - Year.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>Description.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>Description.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WorkModal4