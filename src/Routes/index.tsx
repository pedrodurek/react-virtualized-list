import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'views/Home';
import { Header, MainContainer, Title, Footer, Text } from './styles';

const Routes: FC = () => (
  <MainContainer>
    <Header>
      <Title>Inversed Virtualized</Title>
    </Header>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    <Footer>
      <Text>© 2020 - Inversed Virtualized - Pedro Durek</Text>
    </Footer>
  </MainContainer>
);

export default Routes;
