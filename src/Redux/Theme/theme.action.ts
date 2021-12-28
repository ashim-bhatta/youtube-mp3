import { CHANGE_THEME } from "./type.theme";

export const changeTheme = (theme: string) => ({
  type: CHANGE_THEME,
  payload: theme
});