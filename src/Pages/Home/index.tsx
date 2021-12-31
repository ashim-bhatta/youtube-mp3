import React from 'react'
import Footer from '../../Component/Footer'
import Nav from '../../Component/Nav'
import SearchBar from '../../Component/SearchBar'
import './style.scss'

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <h1 className='home__title'>Listen and get your music</h1>
      <SearchBar />
      <div className='home__cd-container center'>
        <img
          src={require('../../Assets/Images/cd-half.png')}
          alt='half cd'
          className='home__cd-container__image'
        />
      </div>
      <Footer outerCircle />
    </div>
  )
}

export default Home
