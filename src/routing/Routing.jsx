/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Router } from '@reach/router';
import Users from '../pages/Users';

const routes = [{ component: Users, path: '/' }];

const Route = ({ component: Component, ...rest }) => <Component {...rest} />;

const Routing = () => (
  <Router>
    {routes.map(({ component, path }) => (
      <Route key={path} component={component} path={path} />
    ))}
  </Router>
);

export default Routing;
