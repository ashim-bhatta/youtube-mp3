import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Component/Footer'
import { combineReducersType } from '../../Redux'
import { fetchPlaylist } from '../../Redux/Playlist/Playlist.action'
import { PlaylistDetailType } from '../../Redux/Playlist/playlist.type'
import './style.scss'

const PlaylistDetails = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const navigation = useNavigate()
  let location: any = useLocation()
  const [selectedSong, setSelectedSong] = useState<any>({})
  const [isVideoPlaying, setIsVidePlaying] = useState(true)
  const videoRef = useRef(null)
  const [volume, setVolume] = useState(7)
  const [muted, setMuted] = useState(false)
  const url = `https://www.youtube.com/embed/${selectedSong?.id}`
  const [playedTime, setPlayedTime] = useState(0)
  const [totalTIme, setTotalTime] = useState(0)

  const { playlistDetails, loading } = useSelector(
    (state: combineReducersType) => state.PlaylistDetails
  )

  useEffect(() => {
    dispatch(fetchPlaylist(params.id))
  }, [])

  useEffect(() => {
    !loading && setSelectedSong(playlistDetails[0])
  }, [playlistDetails])

  const handleCLick = () => {
    navigation.apply(null, ['/playlist'])
  }

  return (
    <div className='playlist'>
      <h3 className='song-more-list' onClick={() => handleCLick()}>
        <BsArrowLeft /> <span>Back</span>
      </h3>
      <div className='playlist__detail'>
        <div className='playlist__detail__image'>
          <img src={location?.state?.image} alt='playlist thumnails' />
        </div>
        <div className='playlist__detail__title'>
          <p>playlist</p>
          <h3>{location?.state?.title}</h3>
        </div>
      </div>
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
          // onEnded={() => changeSong('next')}
        />
      </div>
      <div className='playlist__song-list'>
        <div className='song'>
          <div className='song__active'>
            <div className='sticky'>
              <div className='title'>
                <h3>Now Playing</h3>
                <p>{playlistDetails?.length || 0} Items on the list</p>
              </div>
              <div className='song__active__outer'>
                <div className='song__active__inner'>
                  <div className='image-cover'>
                    {selectedSong?.thumbnails && (
                      <img src={selectedSong?.thumbnails[2]?.url} alt='' />
                    )}
                    <div className='image-cover-bg'></div>
                  </div>
                  <h3>{selectedSong?.title}</h3>
                  <p>{selectedSong?.channel?.name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='song__list'>
            {playlistDetails?.map((item: PlaylistDetailType, index: number) => {
              return (
                <div
                  onClick={() => setSelectedSong(item)}
                  className={
                    selectedSong?.id === item?.id
                      ? 'song__list__item active'
                      : 'song__list__item'
                  }
                  key={item?.id}
                >
                  <p>{index + 1}</p>
                  <div className='song__list__item__image'>
                    <img src={item?.thumbnails[2].url} alt='song thumnails' />
                  </div>
                  <div className='song__list__item__title'>
                    <h3 className='mob'>{item?.title.slice(0, 30)}</h3>
                    <h3 className='large'>{item?.title}</h3>
                  </div>
                  <div className='song__list__item__duration'>
                    <h3>{item?.duration}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistDetails
