const theme = {
  font: {
    size: {
      xs: '12px',
      s: '20px',
      m: '36px',
      l: '48px',
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
      black: 900,
    },
  },
  color: {
    text: 'rgb(112, 112, 112)',
    background: 'rgb(255, 255, 255)',
    backgroundWithOpacity: 'rgba(255,255,255,0.9)',
    backgroundWithColor: 'linear-gradient(106.29deg, #A9E0A8 0%, #A2D2A1 100%);',
  },
  size: {
    baseWidth: '1200px',
    basePadding: '0 18px',
  },
};

type themeType = typeof theme;

export { theme };
export type { themeType };
