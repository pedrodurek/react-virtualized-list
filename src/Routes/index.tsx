import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/Loading';
import { Header, MainContainer, Title, Footer, Text } from './styles';

const LoadableHome = Loadable({
  loader: () => import('views/Home'),
  loading: Loading,
  delay: 200,
});

const Routes: FC = () => (
  <MainContainer>
    <Header>
      <Title>Inversed Virtualized</Title>
    </Header>
    <Router>
      <Switch>
        <Route exact path="/" component={LoadableHome} />
      </Switch>
    </Router>
    <Footer>
      <Text>© 2020 - Inversed Virtualized - Pedro Durek</Text>
    </Footer>
  </MainContainer>
);

export default Routes;
