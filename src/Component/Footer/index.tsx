import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import ReactPlayer from 'react-player'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import { AiOutlinePause } from 'react-icons/ai'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { combineReducersType } from '../../Redux'
import { selectMusicAction } from '../../Redux/Selected/selected.action'

type propsType = {
  outerCircle?: boolean
}

const Footer = ({ outerCircle = false }: propsType) => {
  const [isVideoPlaying, setIsVidePlaying] = useState(false)
  const { selectedMusic } = useSelector(
    (state: combineReducersType) => state?.selectedMusic
  )
  const { loading, results } = useSelector(
    (state: combineReducersType) => state.search
  )
  const videoRef = useRef(null)
  const [volume, setVolume] = useState(7)
  const [muted, setMuted] = useState(false)
  const url = `https://www.youtube.com/embed/${selectedMusic?.id}`
  const [playedTime, setPlayedTime] = useState(0)
  const [totalTIme, setTotalTime] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    const savedId = localStorage.getItem('playedSong')
    const savedTime = localStorage.getItem('playedTime')
    if (selectedMusic?.id === savedId) {
      videoRef.current.seekTo(parseInt(savedTime))
      setPlayedTime(parseInt(savedTime))
      const data = localStorage.getItem('playing')
      if (data === 'yes') {
        PlayVideo()
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('playing', isVideoPlaying ? 'yes' : 'no')
  }, [isVideoPlaying])

  useEffect(() => {
    const savedTime = localStorage.getItem('playedTime')
    if (playedTime > 0 && playedTime !== parseInt(savedTime)) {
      localStorage.setItem('playedTime', String(playedTime))
      localStorage.setItem('playedSong', selectedMusic?.id)
    }
  }, [playedTime])

  useEffect(() => {
    const data = localStorage.getItem('playing')
    if (selectedMusic?.id && data === 'yes') {
      setIsVidePlaying(true)
    }
  }, [selectedMusic])

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  const handleChangeVideoTime = (value) => {
    videoRef.current.seekTo(value)
    setPlayedTime(value)
  }

  const PlayVideo = () => {
    setIsVidePlaying(!isVideoPlaying)
  }

  const changeSong = (dir: string) => {
    localStorage.removeItem('playedSong')
    localStorage.removeItem('playedTime')
    console.log('changing')

    if (dir == 'next') {
      results.map((team, index) => {
        if (selectedMusic?.index + 1 == index) {
          dispatch(selectMusicAction({ ...team, index }))
        }
      })
    }
    if (dir == 'prev') {
      results.map((team, index) => {
        if (selectedMusic?.index - 1 == index) {
          dispatch(selectMusicAction({ ...team, index }))
        }
      })
    }
  }

  return (
    <div className='footer center'>
      <div
        style={{
          opacity: 0,
          position: 'absolute',
          top: 0,
          pointerEvents: 'none',
          visibility: 'hidden',
          zIndex: -1,
        }}
      >
        <ReactPlayer
          ref={videoRef}
          url={url}
          playing={isVideoPlaying}
          loop={false}
          volume={volume / 10}
          muted={muted}
          width={20}
          height={20}
          onProgress={(e) => setPlayedTime(e.playedSeconds)}
          onDuration={(e) => setTotalTime(e)}
          onEnded={() => changeSong('next')}
        />
      </div>

      <div className='footer__container'>
        <div
          className='play-btn-outer center'
          style={{ boxShadow: !outerCircle && 'none' }}
          onClick={() => PlayVideo()}
        >
          <div
            className={
              isVideoPlaying && selectedMusic?.title
                ? 'play-btn-inner center spin'
                : 'play-btn-inner center'
            }
          >
            {isVideoPlaying && selectedMusic?.title ? (
              <AiOutlinePause className='play-btn-inner__icon' />
            ) : (
              <img
                src={require('../../Assets/Images/play.png')}
                alt='play-btn'
              />
            )}
          </div>
        </div>
        <div className='next-btn' onClick={() => changeSong('next')}>
          <img src={require('../../Assets/Images/next.png')} alt='play-btn' />
        </div>
        <div className='previous-btn' onClick={() => changeSong('prev')}>
          <img
            src={require('../../Assets/Images/previous.png')}
            alt='play-btn'
          />
        </div>
        <div className='volume center'>
          <Slider
            min={0}
            max={10}
            step={1}
            value={volume}
            onChange={(e) => setVolume(e)}
          />
          <div className='volume__icon'>
            {volume > 0 && !muted ? (
              <FiVolume2 onClick={() => setMuted(!muted)} />
            ) : (
              <FiVolumeX onClick={() => setMuted(!muted)} />
            )}
          </div>
        </div>
        <div className='music-details center'>
          <div className='music-details__image-container'>
            <img
              src={require('../../Assets/Images/cd-small.png')}
              alt='cd image'
            />
          </div>
          <h4>
            {selectedMusic?.title &&
              truncateString(
                `${selectedMusic?.title} - ${selectedMusic?.channel?.name}`,
                60
              )}
          </h4>
        </div>

        <div className='songProgressContainer'>
          <h2 style={{ fontSize: '16px', letterSpacing: '01px' }}>
            {moment.utc(playedTime * 1000).format('mm:ss')}
          </h2>
          <div className='songProgessBarOuter'>
            <Slider
              style={{ cursor: 'pointer' }}
              value={playedTime}
              max={totalTIme}
              min={0}
              step={0.1}
              onChange={(e) => handleChangeVideoTime(e)}
            />
          </div>
          <h2 style={{ fontSize: '16px', letterSpacing: '01px' }}>
            {moment.utc(totalTIme * 1000).format('mm:ss')}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
