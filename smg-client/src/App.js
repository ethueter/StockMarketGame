import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import GamePlay from './pages/GamePage';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/home" component={Home} />
        <Route path="/game" component={GamePlay} />
      </Switch>
    </div>
  );
}

export default App;
