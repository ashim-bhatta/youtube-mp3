import { SELECT_MUSIC } from './selected.theme'

const initialState: any = {
  selectedMusic: {},
}

// reducer to change theme
export const selectedMusicReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_MUSIC:
      return {
        ...state,
        selectedMusic: action.payload,
      }
    default:
      return state
  }
}
