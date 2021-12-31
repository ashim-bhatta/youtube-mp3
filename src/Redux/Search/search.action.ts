import axios from 'axios'
import { Dispatch } from 'redux'
import { SEARCH_REQUEST, SEARCH_REQUEST_START } from './search.type'

export const searchSong = (q: string) => async (dispatch: Dispatch) => {
  console.log('searchSong')
  dispatch({ type: SEARCH_REQUEST_START, payload: true })
  try {
    const res = await axios.get(`http://127.0.0.1:8000/search?q=${q}`)
    dispatch({ type: SEARCH_REQUEST, payload: res?.data })
  } catch (error) {
    console.log(error)
  }
}
