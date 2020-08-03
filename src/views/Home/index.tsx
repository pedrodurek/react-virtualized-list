import React, { FC } from 'react';
import { MainContainer } from './styles';
import Controllers from './components/Controllers';
import List from './components/List';
import ListProvider from './contexts/ListProvider';

const Home: FC = () => (
  <MainContainer>
    <ListProvider>
      <Controllers />
      <List />
    </ListProvider>
  </MainContainer>
);

export default Home;
