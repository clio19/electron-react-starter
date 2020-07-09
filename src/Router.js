import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Images from './pages/Images';
import Image from './pages/Image';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/images" exact component={Images} />
        <Route path="/image" exact component={Image} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
