import axios from 'axios'
import { Dispatch } from 'redux'
import {
  FETCHING_PLAYLIST_DETAILS,
  GET_PLAYLIST_DETAILS,
} from './playlist.type'

export const fetchPlaylist = (id: string) => async (dispatch: Dispatch) => {
  console.log('searchSong')
  dispatch({ type: FETCHING_PLAYLIST_DETAILS, payload: true })
  try {
    const res = await axios.get(`http://127.0.0.1:8000/playlist/${id}`)
    dispatch({ type: GET_PLAYLIST_DETAILS, payload: res?.data?.playlists })
  } catch (error) {
    console.log(error)
  }
}
