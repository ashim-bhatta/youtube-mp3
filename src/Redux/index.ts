import { ThemeType } from './Theme/type.theme';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { themeReducer } from './Theme/theme.reducer';


const rootReducer = combineReducers({
  theme: themeReducer
});

export type combineReducersType = {
  theme: ThemeType
};
export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
