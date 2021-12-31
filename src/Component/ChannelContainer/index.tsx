import React from 'react'
import ChannelCard from '../ChannelCard'
import './style.scss'


const ChannelContainer = ({channels}:any) => {
  return (
    <div className='channel-container'>
      {
        channels && channels?.map((item:any) => {
          return <ChannelCard data={item} key={item?.id} />
        })
      }
    </div>

  )
}


export default ChannelContainer