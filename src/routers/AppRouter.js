/**
 * Created by chalosalvador on 8/25/20
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Tasks from '../pages/Tasks';
import Home from '../pages/Home';
import Routes from '../constants/routes';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <Switch>
    <Route path={ Routes.ABOUT }>
      <About />
    </Route>

    <Route path={ Routes.TASKS }>
      <Tasks />
    </Route>

    <Route exact path={ Routes.HOME }>
      <Home />
    </Route>

    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default AppRouter;
