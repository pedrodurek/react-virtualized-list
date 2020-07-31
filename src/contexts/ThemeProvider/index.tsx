import React, { FC } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import pallete from 'res/themes/lightTheme';
import dimens from 'res/dimens';
import { AppTheme } from './types';

const ThemeProvider: FC = ({ children }) => {
  const theme: AppTheme = {
    colors: pallete,
    dimens,
  };

  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
