const constants = {
  contentWidth: {
    default: '100%',
    max: '65.5rem',
  },
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
