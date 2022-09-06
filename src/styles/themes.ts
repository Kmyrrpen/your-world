// hack to enable syntax highlighting without using styled components
// wish there was a fix but ¯\_(ツ)_/¯
const constants = {
  contentWidth: `
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
  borderColor: '#d0d0d0',
};

// TODO: add dark mode
export const darkTheme: Theme = {} as Theme;
