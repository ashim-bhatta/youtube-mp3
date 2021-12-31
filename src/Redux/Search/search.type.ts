export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_REQUEST_START = 'SEARCH_REQUEST_START'

export type SearchType = {
  loading: boolean
  results: Array<any>
  playlist: Array<any>
  channels: Array<any>
}
