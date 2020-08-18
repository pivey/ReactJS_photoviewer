/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Router } from '@reach/router';
import Users from '../pages/Users';
import User from '../pages/User';
import useBontouchContext from '../Hooks/useAppContext';

const Route = ({ component: Component, ...rest }) => <Component {...rest} />;

const Routing = () => {
  const { username } = useBontouchContext();
  const routes = [
    { component: Users, path: '/' },
    { component: User, path: '/user/:userId' },
  ];

  return (
    <Router>
      {routes.map(({ component, path }) => (
        <Route key={path} userId={username} component={component} path={path} />
      ))}
    </Router>
  );
};

export default Routing;
