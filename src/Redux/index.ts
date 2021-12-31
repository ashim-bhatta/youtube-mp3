import { selectedMusicReducer } from './Selected/selected.reducer';
import { SearchType } from './Search/search.type'
import { ThemeType } from './Theme/type.theme'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { themeReducer } from './Theme/theme.reducer'
import { searchReducer } from './Search/search.reducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  search: searchReducer,
  selectedMusic: selectedMusicReducer
})

export type combineReducersType = {
  theme: ThemeType
  search: SearchType
  selectedMusic: any
}
export const store = createStore(rootReducer, {}, applyMiddleware(thunk))
