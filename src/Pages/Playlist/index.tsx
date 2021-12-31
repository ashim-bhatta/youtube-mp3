import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Nav from '../../Component/Nav'
import PlaylistContainer from '../../Component/PlaylistContainer'
import { combineReducersType } from '../../Redux'
import './style.scss'

const Playlist = () => {
  const navigation = useNavigate()
  const { playlist } = useSelector(
    (state: combineReducersType) => state.search
  )

  const handleCLick = () => {
    navigation.apply(null, ['/search'])
  }
  return (
    <div>
      <Nav />
      <div className='search__result'>
      <h3 className='song-more-list' onClick={() => handleCLick()}>
          <BsArrowLeft /> <span>Back</span>
        </h3>
        {
          <PlaylistContainer playlist={playlist} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default Playlist