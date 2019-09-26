import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './views/Feed';
import New from './views/New';

function Routes() {
  return (
    // switch is define for set only one route for request
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={New} />
    </Switch>
  )
}

export default Routes;