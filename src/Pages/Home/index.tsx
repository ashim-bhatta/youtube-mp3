import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Nav from '../../Component/Nav'
import SearchBar from '../../Component/SearchBar'
import './style.scss'

const Home = () => {
  const [value, setValue] = useState('')
  const navigation = useNavigate()

  const handleSearch = (value) => {
    if(value){
      navigation('/search', {
        state: {
          value,
        }
      })
    }
  }

  return (
    <div className='home'>
      <Nav />
      <h1 className='home__title'>Listen and get your music</h1>
      <SearchBar value={value} setValue={setValue} handleSearch={handleSearch}  />
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
