import React, { useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import { useGlobal } from './hooks/useGlobal';

function App() {
  const global = useGlobal();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact path="/" to="/home"></Redirect>
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
