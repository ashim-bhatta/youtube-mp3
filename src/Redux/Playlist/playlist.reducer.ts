import {
  FETCHING_PLAYLIST_DETAILS,
  GET_PLAYLIST_DETAILS,
  PlaylistInitialStateType,
} from './playlist.type'

const initialState: PlaylistInitialStateType = {
  loading: false,
  playlistDetails: [],
}

// reducer to change theme
export const playlistReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PLAYLIST_DETAILS:
      return {
        ...state,
        playlistDetails: action.payload,
        loading: false,
      }
    case FETCHING_PLAYLIST_DETAILS:
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state
  }
}
