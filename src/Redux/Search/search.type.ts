export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_REQUEST_START = 'SEARCH_REQUEST_START'

export type ViewCountType = {
  text: string
  short: string
}

export type ChannelType = {
  id: string
  name: string
  thumbnail: thumbnailsType
  link: string
}
export type thumbnailsType = {
  url: string
  width: number
  height: number
}

export type AccessibilityType = {
  title: string
  duration: string
}
export type SongsType = {
  type: string
  id: string
  title: string
  publishedTime: string
  duration: string
  viewCount: ViewCountType
  thumbnails: Array<thumbnailsType>
  richThumbnail: thumbnailsType
  channel: ChannelType
  accessibility: AccessibilityType
  link: string
}

export type PlaylistType = {
  type: string
  id: string
  thumbnails: Array<thumbnailsType>
  title: string
  channel: ChannelType
  duration: string
  link: string
  videoCount?: string
}

export type SearchType = {
  loading: boolean
  results: Array<SongsType>
  playlist: Array<any>
  channels: Array<PlaylistType>
}
