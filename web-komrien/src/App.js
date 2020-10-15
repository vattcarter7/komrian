import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chapter from './components/Chapter/Chapter';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/chapter' component={Chapter} />
      </Switch>
    </div>
  );
}

export default App;
