import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chapter from './components/Chapter/Chapter';
import DragNDrop from './components/DnD/DragNDrop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/test/chapter' component={Chapter} />
        <Route exact path='/test/draganddrop' component={DragNDrop} />
      </Switch>
    </div>
  );
}

export default App;
