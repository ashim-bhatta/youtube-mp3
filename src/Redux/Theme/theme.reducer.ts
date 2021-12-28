import { CHANGE_THEME, ThemeType } from "./type.theme";

const initialState: ThemeType = {
  theme: 'light',
}

// reducer to change theme
export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}
