import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import ScrollToTop from './components/Scroll';

import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </ScrollToTop>
    </React.Fragment>
  );
}

export default App;
