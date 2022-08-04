import { darkTheme, lightTheme } from "@/styles/themes";
import { createChain } from "sculk";
import { createSculk } from "sculk/dist/createSculk";
import { themeStore } from "./store";

export const toggleTheme = createSculk("theme/toggle", () => {
  themeStore.theme = lightTheme ? darkTheme : lightTheme
})

export const themeChain = createChain(toggleTheme);