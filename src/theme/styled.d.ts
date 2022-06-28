import 'styled-components';
import { themeType } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme extends themeType { }
}
