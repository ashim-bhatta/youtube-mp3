import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../Component/Footer'
import Nav from '../../Component/Nav'
import SongContainer from '../../Component/SongContainer'
import { combineReducersType } from '../../Redux'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Songs = () => {
  const navigation = useNavigate()
  const { loading, results } = useSelector(
    (state: combineReducersType) => state.search
  )
  const handleCLick = () => {
    navigation.apply(null, ['/search'])
  }
  return (
    <>
      <Nav />

      <div className='search__result'>
        <h3 className='song-more-list' onClick={() => handleCLick()}>
          <BsArrowLeft /> <span>Back</span>
        </h3>
        <SongContainer results={results} />
      </div>
      <Footer />
    </>
  )
}

export default Songs
