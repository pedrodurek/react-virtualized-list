import React, { FC } from 'react';
import ReactDOM from 'react-dom';

const App: FC = () => (
  <div>
    <span>Hello World!!!</span>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
