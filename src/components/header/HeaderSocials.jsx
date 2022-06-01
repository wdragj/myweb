import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/freddy-seo-00003a237/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/wdragj" target="_blank"><FaGithub/></a>
      <a href="https://www.facebook.com/tjdydwns/" target="_blank"><FaFacebook/></a>
      <a href="https://www.instagram.com/wdragj1003/" target="_blank"><BsInstagram/></a>
      <a href=""><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials