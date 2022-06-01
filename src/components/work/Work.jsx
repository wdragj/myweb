import React from 'react'
import { useState } from 'react'
import './work.css'
import { FiBriefcase } from 'react-icons/fi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { AiOutlineRead } from 'react-icons/ai'
import WorkModal1 from './WorkModal1'
import WorkModal2 from './WorkModal2'
import WorkModal3 from './WorkModal3'
import WorkModal4 from './WorkModal4'

const Work = () => {

  const [workModal1, setWorkOpen1] = useState(false);
  const [workModal2, setWorkOpen2] = useState(false);
  const [workModal3, setWorkOpen3] = useState(false);
  const [workModal4, setWorkOpen4] = useState(false);

  return (
    <section id='work'>
      <h5>My past</h5>
      <h2>Work</h2>

      <div className="container work__container">
        <div className="work__label">
          <FiBriefcase className='work__icon'/>
        </div>

        <div className="work__contents">
          {/*=============== WORK 1 ===============*/}
          <div className="work__content">
            <div>
              <h3 className="work__title">Work 1</h3>
              <span className="btn__view" onClick={() => { setWorkOpen1(true); }}><p>Information<AiOutlineRead className='info__icon'/></p></span>
              <span className="work__subtitle">Suwon, South Korea</span>
              <div className="work__calendar">
                <FaRegCalendarAlt className='calendar__icon'/>
                2007 - 2019
              </div>

              {workModal1 && <WorkModal1 closeWorkModal1={setWorkOpen1}/>}
            </div>

            <div>
              <span className="work__rounder"></span>
              <span className="work__line"></span>
            </div>
          </div>

          {/*=============== WORK 2 ===============*/}
          <div className="work__content">
            <div></div>

            <div>
              <span className="work__rounder"></span>
              <span className="work__line"></span>
            </div>

            <div>
              <h3 className="work__title">Work 2</h3>
              <span className="btn__view" onClick={() => { setWorkOpen2(true); }}><p>Information<AiOutlineRead className='info__icon'/></p></span>
              <span className="work__subtitle">Madison, WI, US</span>
              <div className="work__calendar">
                <FaRegCalendarAlt className='calendar__icon'/>
                2019 (Fall) - 2020 (Spring)
              </div>

              {workModal2 && <WorkModal2 closeWorkModal2={setWorkOpen2}/>}
            </div>
          </div>

          {/*=============== WORK 3 ===============*/}
          <div className="work__content">
            <div>
              <h3 className="work__title">Work 3</h3>
              <span className="btn__view" onClick={() => { setWorkOpen3(true); }}><p>Information<AiOutlineRead className='info__icon'/></p></span>
              <span className="work__subtitle">Seoul, South Korea</span>
              <div className="work__calendar">
                <FaRegCalendarAlt className='calendar__icon'/>
                2022 (March - September)
              </div>

              {workModal3 && <WorkModal3 closeWorkModal3={setWorkOpen3}/>}
            </div>

            <div>
              <span className="work__rounder"></span>
              <span className="work__line"></span>
            </div>
          </div>

          {/*=============== WORK 4 ===============*/}
          <div className="work__content">
            <div></div>

            <div>
              <span className="work__rounder"></span>
              {/* <span className="work__line"></span> */}
            </div>

            <div>
              <h3 className="work__title">Work 4</h3>
              <span className="btn__view" onClick={() => { setWorkOpen4(true); }}><p>Information<AiOutlineRead className='info__icon'/></p></span>
              <span className="work__subtitle">Madison, WI, US</span>
              <div className="work__calendar">
                <FaRegCalendarAlt className='calendar__icon'/>
                2023 (Spring) ~
              </div>

              {workModal4 && <WorkModal4 closeWorkModal4={setWorkOpen4}/>}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Work