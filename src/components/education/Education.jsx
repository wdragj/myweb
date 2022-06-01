import React from 'react'
import './education.css'
import { FaSchool } from 'react-icons/fa'
import {FaRegCalendarAlt} from 'react-icons/fa'

const Education = () => {
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
              <h3 className="education__title">(International School)</h3>
              <span className="education__subtitle">Suwon, South Korea</span>
              <div className="education__calendar">
                <FaRegCalendarAlt />
                2007 - 2019
              </div>
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
              <h3 className="education__title">(BS in CS)</h3>
              <span className="education__subtitle">Madison, WI, US</span>
              <div className="education__calendar">
                <FaRegCalendarAlt />
                2019 (Fall) - 2020 (Spring)
              </div>
            </div>
          </div>

          {/*=============== EDUCATION 3 ===============*/}
          <div className="education__content">
            <div>
              <h3 className="education__title">KAIST</h3>
              <h3 className="education__title">(BS in CS)</h3>
              <span className="education__subtitle">Seoul, South Korea</span>
              <div className="education__calendar">
                <FaRegCalendarAlt />
                2022 (March - September)
              </div>
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
              <h3 className="education__title">(BS in CS)</h3>
              <span className="education__subtitle">Madison, WI, US</span>
              <div className="education__calendar">
                <FaRegCalendarAlt />
                2023 (Spring) ~
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education