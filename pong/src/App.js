import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScroeBoard from './scroeBoard';
import Play from './play';
import Main from './main';
import Single from './single';
import Multi from './multi';
import Online from './online';
// import { createBrowserHistory } from 'history';

function App() {
 

  return (
    //<Router  history={ history }>
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Pong</h1>
      </header>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/play" component={Play} />
          <Route path="/scroeBoard" component={ScroeBoard} />
          <Route path="/single" component={Single} />
          <Route path="/multi" component={Multi} />
          <Route path="/online" component={Online} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

