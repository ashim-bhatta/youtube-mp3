import React from 'react'
import './style.scss'
import { IoMdPlayCircle } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='footer center'>
      <div className='footer__container'>
        <div className='play-btn-outer center'>
          <div className='play-btn-inner center'>
            <img src={require('../../Assets/Images/play.png')} alt='play-btn' />
          </div>
        </div>
        <div className='next-btn'>
          <img src={require('../../Assets/Images/next.png')} alt='play-btn' />
        </div>
        <div className='previous-btn'>
          <img
            src={require('../../Assets/Images/previous.png')}
            alt='play-btn'
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
