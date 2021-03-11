import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from 'react'

import './App.css';
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetails></LeagueDetails>
          </Route>
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     

    </div>
  );
}

export default App;
