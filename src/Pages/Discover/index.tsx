import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Nav from '../../Component/Nav'
import SearchBar from '../../Component/SearchBar'
import './style.scss'

const Discover = () => {
  

  return (
    <div className='discover'>
      <Nav />
      <h2>
        This is discover
      </h2>
      <Footer />
    </div>
  )
}

export default Discover
