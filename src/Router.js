import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import Image from './pages/Image';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/Jobs" exact component={Jobs} />
        <Route path="/image" exact component={Image} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
