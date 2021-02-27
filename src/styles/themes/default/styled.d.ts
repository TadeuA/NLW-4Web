import 'styled-components';

import { colors } from './colors';

import { fonts } from './fonts';

import { shadows } from './shadows';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
    shadows: typeof shadows;
  }
}
