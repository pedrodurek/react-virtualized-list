import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'contexts/ThemeProvider';
import styled from 'styled-components';

const Test = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const App: FC = () => (
  <ThemeProvider>
    <div>
      <Test>Hello World!</Test>
    </div>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
