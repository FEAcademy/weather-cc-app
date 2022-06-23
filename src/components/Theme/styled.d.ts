import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    appMaxWidth: number;
    colors: {
      lightGray: string;
    };
  }
}
