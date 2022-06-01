import React from 'react'
import './education.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function EdModal2({closeEdModal2}) {
  return (
    <div className="information__modal">
      <div className="information__modal-content">
        <h3 className="education__title information__modal-title">UW-Madison <br /> (University of Wisconsin-Madison)</h3>
        <span className='information__modal-close' onClick={() => closeEdModal2(false)}><AiOutlineCloseCircle /></span>
        
        <ul className="information__modal-informations">
          <li className='information__modal-information'>
            <p className='info-description'>Fall 2019 - Spring 2020.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>Bachelor of Science in Computer Science.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>I have completed the Freshmen year at UW-Madison.</p>
          </li>
          <li className='information__modal-information'>
            <p className='info-description'>After completing Freshmen year, I took a break due to obligation for South Korean military service for 18 months.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EdModal2