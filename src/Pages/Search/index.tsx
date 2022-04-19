import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../Component/Footer'
import Nav from '../../Component/Nav'
import SearchBar from '../../Component/SearchBar'
import SongContainer from '../../Component/SongContainer'
import { combineReducersType } from '../../Redux'
import { searchSong } from '../../Redux/Search/search.action'
import { selectMusicAction } from '../../Redux/Selected/selected.action'
import { BsArrowRight } from 'react-icons/bs'
import './style.scss'
import { Link, useLocation, useParams, useRoutes } from 'react-router-dom'
import PlaylistContainer from '../../Component/PlaylistContainer'
import ChannelContainer from '../../Component/ChannelContainer'
import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/PropagateLoader'

type propsType = {
  params?: any
}

const Search = () => {
  const { selectedMusic } = useSelector(
    (state: combineReducersType) => state?.selectedMusic
  )
  const { loading, results, playlist, channels } = useSelector(
    (state: combineReducersType) => state.search
  )
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  let location: any = useLocation()

  useEffect(() => {
    if (location.state?.value) {
      setQuery(location.state.value)
      fetchSOng(location.state?.value)
    }
  }, [location])

  const fetchSOng = (query) => {
    query && dispatch(searchSong(query))
  }

  const changeSong = (dir: string) => {
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
    <div className='search'>
      <Nav />
      <div style={{ margin: 30 }} />
      <SearchBar value={query} setValue={setQuery} handleSearch={fetchSOng} />
      <Footer />

      {loading && (
        <div style={{ width: '100%', height: 150 }} className='center'>
          <ClipLoader color={'#252525'} loading={true} size={10} />
        </div>
      )}
      {!loading && (
        <div className='search__result'>
          <div>
            {results?.length > 0 && (
              <h2 className='search__result__count'>Songs</h2>
            )}
            {/* song */}
            <SongContainer results={results.slice(0, 6)} />
            {results.length > 6 && (
              <Link
                to='/song-list'
                className='song-more-list'
                style={{ textAlign: 'right', justifyContent: 'flex-end' }}
              >
                See all
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            )}
          </div>

          {/* playlist */}
          <div style={{ margin: '50px 0' }}>
            {playlist?.length > 0 && (
              <h2 className='search__result__count'>Playlist</h2>
            )}
            <PlaylistContainer playlist={playlist.slice(0, 10)} />
            {playlist.length > 10 && (
              <Link
                to='/playlist'
                className='song-more-list'
                style={{ textAlign: 'right', justifyContent: 'flex-end' }}
              >
                See all
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            )}
          </div>

          {/* channel */}
          <div style={{ margin: '50px 0' }}>
            {channels?.length > 0 && (
              <h2 className='search__result__count'>Channels</h2>
            )}
            <ChannelContainer channels={channels.slice(0, 10)} />
            {channels.length > 10 && (
              <Link
                to='/channels'
                className='song-more-list'
                style={{ textAlign: 'right', justifyContent: 'flex-end' }}
              >
                See all
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
