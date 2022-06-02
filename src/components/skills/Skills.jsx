import React from 'react'
import { useState } from 'react'
import './skills.css'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaBootstrap } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { BiServer } from 'react-icons/bi'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

const Skills = () => {
  const [showFE, setShowFE] = useState(false)
  const [showBE, setShowBE] = useState(false)

  return (
    <section id='skills'>
      <h5>My technical</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend skills__type">
          <div className="skills__header" onClick={() => setShowFE(!showFE)}>
            <MdWeb className='skills__header-icon' />
            <div>
              <h3>Frontend Development</h3>
              <h5 className='text-light'>Frontend Skills and Technologies</h5>
            </div>
            <AiOutlineEyeInvisible className='skills__toggle' />
          </div>

          {showFE ?
            <div className="skills__content">
              <article className="skills__details">
                <div className='skills__skill-set'>
                  <DiHtml5 className='skills__details-icon' />
                  <h4>HTML</h4>
                </div>
              </article>

              <article className="skills__details">
                <div className='skills__skill-set'>
                  <DiCss3 className='skills__details-icon' />
                  <h4>CSS</h4>
                </div>
              </article>

              <article className="skills__details">
                <div className='skills__skill-set'>
                  <IoLogoJavascript className='skills__details-icon' />
                  <h4>JavaScript</h4>
                </div>
              </article>

              <article className="skills__details">
                <div className='skills__skill-set'>
                  <FaBootstrap className='skills__details-icon' />
                  <h4>Bootstrap</h4>
                </div>
              </article>

              <article className="skills__details">
                <div className='skills__skill-set'>
                  <FaReact className='skills__details-icon' />
                  <h4>React</h4>
                </div>
              </article>

            </div>
            : null}
        </div>

        <div className="skills__backend skills__type">
          <div className="skills__header" onClick={() => setShowBE(!showBE)}>
            <BiServer className='skills__header-icon' />
            <div>
              <h3>Backend Development</h3>
              <h5 className='text-light'>Backend Skills and Technologies</h5>
            </div>
            <AiOutlineEyeInvisible className='skills__toggle' />
          </div>

          {showBE ?
            <div className="skills__content">

              <article className="skills__details">
                <div className='skills__skill-set'>
                  <DiHtml5 className='skills__details-icon' />
                  <h4>HTML</h4>
                </div>
              </article>

              <article className="skills__details">
                <div className='skills__skill-set'>
                  <DiCss3 className='skills__details-icon' />
                  <h4>CSS</h4>
                </div>
              </article>

              <article className="skills__details">
                <div className='skills__skill-set'>
                  <IoLogoJavascript className='skills__details-icon' />
                  <h4>JavaScript</h4>
                </div>
              </article>

              <article className="skills__details">
                <div className='skills__skill-set'>
                  <FaBootstrap className='skills__details-icon' />
                  <h4>Bootstrap</h4>
                </div>
              </article>

              <article className="skills__details">
                <div className='skills__skill-set'>
                  <FaReact className='skills__details-icon' />
                  <h4>React</h4>
                </div>
              </article>

            </div>
            : null}
        </div>
      </div>
    </section>
  )
}

export default Skills