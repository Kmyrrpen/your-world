import { lightTheme, Theme } from "@/styles/themes";
import { proxy } from "valtio";

type ThemeStore = {
  theme: Theme
}

// TODO: set to user's preference instead.
let userTheme = lightTheme;

export const themeStore = proxy<ThemeStore>({
  theme: userTheme
})