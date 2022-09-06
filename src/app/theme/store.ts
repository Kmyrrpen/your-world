import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from '@/styles/themes';
import { proxy } from 'valtio';
import { createReducer } from 'wuuber';

type ThemeStore = {
  currentTheme: DefaultTheme;
};

// TODO: set to user's preference instead.
const userTheme = lightTheme;

export const theme = proxy<ThemeStore>({
  currentTheme: userTheme,
});
export const themeReducer = createReducer('theme', {
  toggleTheme: () => {
    theme.currentTheme = lightTheme ? darkTheme : lightTheme;
  },
});

export const { toggleTheme } = themeReducer.actions;
