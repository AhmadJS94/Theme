import React from 'react';

import { Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from './components/helpers/loading/Loading';
import Navbar from './components/Navbar';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: () => <Loading color={null} />,
});
function App() {
  return (
    <div className="font-body antialiased relative">
      <Navbar />
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
