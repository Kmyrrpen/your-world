// hack to enable syntax highlighting without using styled components;
const css = (s: TemplateStringsArray) => s.concat("");
const constants = {
  contentWidth: css`
    max-width: 60.5rem;
    width: 100%;
  `,
};

export interface Theme {
  constants: typeof constants;
  borderColor: string;
}

export const lightTheme: Theme = {
  constants,
  borderColor: "#d0d0d0",
};

// TODO: add dark mode
export const darkTheme: Theme = {} as Theme;
