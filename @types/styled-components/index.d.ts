import { AppTheme } from 'contexts/ThemeProvider/types';

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}

export * from 'styled-components';
