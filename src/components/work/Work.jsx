import React from 'react'
import './work.css'
import { FiBriefcase } from 'react-icons/fi'
import {FaRegCalendarAlt} from 'react-icons/fa'

const Work = () => {
  return (
    <section id='work'>
      <h5>My past</h5>
      <h2>Work</h2>

      <div className="container work__container">
        <div className="work__label">
          <FiBriefcase className='work__icon'/>
        </div>

        <div className="work__contents">
          {/*=============== work 1 ===============*/}
          <div className="work__content">
            <div>
              <h3 className="work__title">GSIS</h3>
              <h3 className="work__title">(International School)</h3>
              <span className="work__subtitle">Suwon, South Korea</span>
              <div className="work__calendar">
                <FaRegCalendarAlt />
                2007 - 2019
              </div>
            </div>

            <div>
              <span className="work__rounder"></span>
              <span className="work__line"></span>
            </div>
          </div>

          {/*=============== work 2 ===============*/}
          <div className="work__content">
            <div></div>

            <div>
              <span className="work__rounder"></span>
              <span className="work__line"></span>
            </div>

            <div>
              <h3 className="work__title">UW-Madison</h3>
              <h3 className="work__title">(BS in CS)</h3>
              <span className="work__subtitle">Madison, WI, US</span>
              <div className="work__calendar">
                <FaRegCalendarAlt />
                2019 (Fall) - 2020 (Spring)
              </div>
            </div>
          </div>

          {/*=============== work 3 ===============*/}
          <div className="work__content">
            <div>
              <h3 className="work__title">KAIST</h3>
              <h3 className="work__title">(BS in CS)</h3>
              <span className="work__subtitle">Seoul, South Korea</span>
              <div className="work__calendar">
                <FaRegCalendarAlt />
                2022 (March - September)
              </div>
            </div>

            <div>
              <span className="work__rounder"></span>
              <span className="work__line"></span>
            </div>
          </div>

          {/*=============== work 4 ===============*/}
          <div className="work__content">
            <div></div>

            <div>
              <span className="work__rounder"></span>
              {/* <span className="work__line"></span> */}
            </div>

            <div>
            <h3 className="work__title">UW-Madison</h3>
              <h3 className="work__title">(BS in CS)</h3>
              <span className="work__subtitle">Madison, WI, US</span>
              <div className="work__calendar">
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

export default Work