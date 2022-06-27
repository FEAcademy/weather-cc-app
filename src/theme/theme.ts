const theme = {
  widths: {
    appMax: '1200px',
  },
  colors: {
    text: '#707070',
  },
  fontWeights: {
    light: 300,
    bold: 900,
  },
  paddings: {
    app: '0 18px',
  },
};

type themeType = typeof theme;

export { theme };
export type { themeType };
