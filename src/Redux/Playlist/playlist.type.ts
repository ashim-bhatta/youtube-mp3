export const FETCHING_PLAYLIST_DETAILS = 'FETCHING_PLAYLIST_DETAILS'
export const GET_PLAYLIST_DETAILS = 'GET_PLAYLIST_DETAILS'

export type PlaylistInitialStateType = {
  loading: boolean
  playlistDetails: Array<PlaylistDetailType>
}

export type thumbnailsType = {
  url: string
  width: number
  height: number
}

export type ChannelType = {
  id: string
  title: string
  link: thumbnailsType
}

export type AccessibilityaType = {
  title: string
  duration: string
}
export type PlaylistDetailType = {
  id: string
  thumbnails: Array<thumbnailsType>
  title: string
  channel: ChannelType
  duration: string
  accessibility: AccessibilityaType
  link: string
  videoCount?: string
}
