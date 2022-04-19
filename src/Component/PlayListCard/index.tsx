import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const PlayListCard = ({ data }: any) => {
  const navigation = useNavigate()

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  const handleCLick = () => {
    console.log('data.id', data.id)

    navigation(`/playlist/${data.id}`, {
      state: {
        image: data?.thumbnails[3]?.url,
        videoCount: data?.videoCount,
        title: data?.title,
      },
    })
  }

  return (
    <div className='playlist-card center' onClick={() => handleCLick()}>
      <div className='playlist-card__image-container'>
        <img
          className='playlist-card__image'
          src={data?.thumbnails[3]?.url}
          alt=''
        />
      </div>
      <h3 className='playlist-card__title'>
        {truncateString(data?.title, 20)}
      </h3>
    </div>
  )
}

export default PlayListCard
