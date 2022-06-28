const theme = {
  width: {
    app: '1200px',
  },
  padding: {
    app: '0px 18px',
  },
  color: {
    text: '#707070',
    background: '#ffffff',
  },
  font: {
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
      black: 900,
    },
  },
};

type themeType = typeof theme;

export { theme };
export type { themeType };
