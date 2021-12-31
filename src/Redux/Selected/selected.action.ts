import { SELECT_MUSIC } from './selected.theme'

export const selectMusicAction = (music: any) => ({
  type: SELECT_MUSIC,
  payload: music,
})
