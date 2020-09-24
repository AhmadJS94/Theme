import React from 'react';

import { Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from './components/helpers/loading/Loading';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: () => <Loading color={null} />,
});
function App() {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
