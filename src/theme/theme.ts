const theme = {
  widths: {
    app: '1200px',
    mobile: '420px',
    tablet: '1000px',
  },
  paddings: {
    app: '0px 18px',
  },
  colors: {
    text: '#707070',
    backgrounds: {
      main: '#ffffff',
      gradient: 'linear-gradient(106.29deg, #FFFFFF 0%, #FAFAFA 100%)',
    },
  },
  defraTheme: {
    backgrounds: {
      default: 'linear-gradient(106.29deg, #FFFFFF 0%, #FAFAFA 100%)',
      low: 'linear-gradient(106.46deg, #A9E0A8 0%, #9FD29E 100%)',
      moderate: 'linear-gradient(106.03deg, #F4C173 0.61%, #E6B56D 100%)',
      high: 'linear-gradient(106.46deg, #F47B73 0.57%, #E1726B 100.57%)',
      veryHigh: 'linear-gradient(106.46deg, #B04C94 0%, #943F7C 100%)',
    },
    colors: {
      light: '#ECEBEB',
      dark: '#707070',
    },
  },
};

type themeType = typeof theme;

export { theme };
export type { themeType };
