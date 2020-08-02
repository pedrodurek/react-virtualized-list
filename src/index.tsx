import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'contexts/ThemeProvider';
import Routes from './Routes';

const App: FC = () => (
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
