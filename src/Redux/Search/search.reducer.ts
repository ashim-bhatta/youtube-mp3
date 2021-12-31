import { SearchType, SEARCH_REQUEST } from './search.type'

const initialState: SearchType = {
  loading: false,
  results: [],
  playlist: [],
  channels: [],
}

// reducer to change theme
export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        results: action.payload.songs,
        playlist: action.payload.playlist,
        channels: action.payload.channels,
        loading: false,
      }
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
