import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Feed from './views/Feed';
import New from './views/New';
import NotFound from './views/NotFound';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

import { isAuthenticated } from "./services/auth";

function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <PrivateRoute path="/" exact component={Feed} />
      <PrivateRoute path="/new" component={New} />

      <Route path="*" component={NotFound} />
    </Switch>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated()
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: "/signin", state: { from: props.location } }} />)
    }
  />
);

export default Routes;