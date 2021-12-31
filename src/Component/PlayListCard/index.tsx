import React from 'react'
import './style.scss'

const PlayListCard = ({data}:any) => {

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  return <div className='playlist-card center'>
    <div className="playlist-card__image-container">
      <img className="playlist-card__image" src={data?.thumbnails[3]?.url} alt=""/>
    </div>
    <h3 className="playlist-card__title">{ truncateString(data?.title,20) }</h3>
  </div>
}

export default PlayListCard
