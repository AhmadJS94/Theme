import React from 'react';

import { Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Loadable from 'react-loadable';
import Loading from './components/helpers/loading/Loading';
import Navbar from './components/Navbar';
import MobileNavBar from './components/MobileNavBar';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: () => <Loading color={null} />,
});
function App() {
  const isTabletOrAbove = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div className="font-body antialiased relative">
      {isTabletOrAbove ? <Navbar /> : <MobileNavBar />}
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
