import React from 'react'
import PlayListCard from '../PlayListCard'
import './style.scss'


type propsType = {
  playlist?: any
}

const PlaylistContainer = ({playlist}:propsType) => {
  return (
    <div className='playlist-container'>
      {
        playlist?.map((item:any) => {
          return <PlayListCard data={item} key={item.id}/>
        })
      }
    </div>
  )
}

export default PlaylistContainer
