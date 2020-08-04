import React, { FC } from 'react';
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import pallete from 'res/themes/lightTheme';
import dimens from 'res/dimens';
import { AppTheme } from './types';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ThemeProvider: FC = ({ children }) => {
  const theme: AppTheme = {
    colors: pallete,
    dimens,
  };

  return (
    <StyledComponentsThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
