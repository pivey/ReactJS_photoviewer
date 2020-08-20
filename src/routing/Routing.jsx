/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Router } from '@reach/router';
import Users from '../pages/Users';
import User from '../pages/User';
import Album from '../pages/Album';

const Route = ({ component: Component, ...rest }) => <Component {...rest} />;

const Routing = () => {
  const routes = [
    { component: Users, path: '/' },
    { component: User, path: '/user' },
    { component: Album, path: '/album' },
  ];

  return (
    <Router>
      {routes.map(({ component, path }) => (
        <Route key={path} component={component} path={path} />
      ))}
    </Router>
  );
};

export default Routing;
