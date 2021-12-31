import React from 'react'
import './style.scss'
import { AiOutlinePause } from 'react-icons/ai'
import { selectMusicAction } from '../../Redux/Selected/selected.action'
import { useDispatch, useSelector } from 'react-redux'
import { combineReducersType } from '../../Redux'

type propsType = {
  data?: any
}
const MusicCard = ({ data }: propsType) => {
  const dispatch = useDispatch()
  const { selectedMusic } = useSelector(
    (state: combineReducersType) => state?.selectedMusic
  )

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  const handleSongClick = (data: any) => {
    dispatch(selectMusicAction(data))
    localStorage.setItem('playing', 'yes')
  }

  return (
    <div
      className={
        selectedMusic?.id === data?.id
          ? 'musicCard musicCard-selected'
          : 'musicCard'
      }
    >
      <div className='musicCard__image-container'>
        <img
          className='musicCard__image'
          src={data?.thumbnails[0]?.url}
          alt='music'
        />
        <img
          src={require('../../Assets/Images/cd-small.png')}
          alt=''
          className={
            selectedMusic?.id === data?.id
              ? 'musicCard__cd-image'
              : 'musicCard__cd-image'
          }
        />
      </div>
      <div className='musicCard__content'>
        <h2 className='musicCard__content__title'>{data?.title}</h2>
        <p className='musicCard__content__description-mobile'>
          {truncateString(data?.channel?.name, 50)}
        </p>
        <p className='musicCard__content__description-big-screen'>
          {truncateString(data?.channel?.name, 70)}
        </p>
        <div
          className='center'
          style={{ justifyContent: 'space-between', marginTop: 10 }}
        >
          <div
            className='play-btn center'
            onClick={() => {
              handleSongClick(data)
            }}
          >
            {selectedMusic?.id !== data?.id ? (
              <img src={require('../../Assets/Images/play.png')} alt='' />
            ) : (
              <AiOutlinePause className='play-btn-inner__icon' />
            )}
          </div>
          <span className='view'>{data?.viewCount?.short}</span>
        </div>
      </div>
    </div>
  )
}

export default MusicCard
