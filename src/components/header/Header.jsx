import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Freddy Seo</h1>
        <h5 className="text-light">A passionate programmer from South Korea</h5>
        <h5 className="text-light header__desc">This is my personal website/blog where I keep track of my progress as a programmer.</h5>
        <CTA />

        <HeaderSocials />
        
        <div className="me">
          <img className='mephoto' src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header