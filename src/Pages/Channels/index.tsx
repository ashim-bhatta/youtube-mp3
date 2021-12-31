import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ChannelContainer from '../../Component/ChannelContainer'
import Footer from '../../Component/Footer'
import Nav from '../../Component/Nav'
import { combineReducersType } from '../../Redux'

const Channels = () => {
  const navigation = useNavigate()
  const { channels } = useSelector(
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
          <ChannelContainer channels={channels} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default Channels