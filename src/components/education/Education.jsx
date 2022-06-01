import React from 'react'
import { useState } from 'react'
import './education.css'
import { FaSchool } from 'react-icons/fa'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { AiOutlineRead } from 'react-icons/ai'
import EdModal1 from './EdModal1'
import EdModal2 from './EdModal2'
import EdModal3 from './EdModal3'
import EdModal4 from './EdModal4'

const Education = () => {

  const [edModal1, setEdOpen1] = useState(false);
  const [edModal2, setEdOpen2] = useState(false);
  const [edModal3, setEdOpen3] = useState(false);
  const [edModal4, setEdOpen4] = useState(false);

  return (
    <section id='education'>
      <h5>My past</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <div className="education__label">
          <FaSchool className='education__icon' />
        </div>

        <div className="education__contents">
          {/*=============== EDUCATION 1 ===============*/}
          <div className="education__content">
            <div>
              <h3 className="education__title">GSIS</h3>
              <span className="btn__view" onClick={() => { setEdOpen1(true); }}><p>Information<AiOutlineRead className='info__icon'/></p></span>
              <span className="education__subtitle">Suwon, South Korea</span>
              <div className="education__calendar">
                <FaRegCalendarAlt className='calendar__icon'/>
                2007 - 2019
              </div>

              {edModal1 && <EdModal1 closeEdModal1={setEdOpen1}/>}
            </div>

            <div>
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>
          </div>

          {/*=============== EDUCATION 2 ===============*/}
          <div className="education__content">
            <div></div>

            <div>
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>

            <div>
              <h3 className="education__title">UW-Madison</h3>
              <span className="btn__view" onClick={() => { setEdOpen2(true); }}><p>Information<AiOutlineRead className='info__icon'/></p></span>
              <span className="education__subtitle">Madison, WI, US</span>
              <div className="education__calendar">
                <FaRegCalendarAlt className='calendar__icon'/>
                Fall 2019 - Spring 2020
              </div>

              {edModal2 && <EdModal2 closeEdModal2={setEdOpen2}/>}
            </div>
          </div>

          {/*=============== EDUCATION 3 ===============*/}
          <div className="education__content">
            <div>
              <h3 className="education__title">KAIST</h3>
              <span className="btn__view" onClick={() => { setEdOpen3(true); }}><p>Information<AiOutlineRead className='info__icon'/></p></span>
              <span className="education__subtitle">Seoul, South Korea</span>
              <div className="education__calendar">
                <FaRegCalendarAlt className='calendar__icon'/>
                (March - September) 2022
              </div>

              {edModal3 && <EdModal3 closeEdModal3={setEdOpen3}/>}
            </div>

            <div>
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>
          </div>

          {/*=============== EDUCATION 4 ===============*/}
          <div className="education__content">
            <div></div>

            <div>
              <span className="education__rounder"></span>
              {/* <span className="education__line"></span> */}
            </div>

            <div>
              <h3 className="education__title">UW-Madison</h3>
              <span className="btn__view" onClick={() => { setEdOpen4(true); }}><p>Information<AiOutlineRead className='info__icon'/></p></span>
              <span className="education__subtitle">Madison, WI, US</span>
              <div className="education__calendar">
                <FaRegCalendarAlt className='calendar__icon'/>
                Spring 2023 ~
              </div>

              {edModal4 && <EdModal4 closeEdModal4={setEdOpen4}/>}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education