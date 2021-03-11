import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'


import './App.css';
import League from './components/League/League';
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  // const [leagues, setLeagues] = useState([]);
  // const maxNine = leagues.slice(0,9);
  // console.log(maxNine)
  // useEffect(()=>{
  //   fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
  //   .then(res => res.json())
  //   .then(data=> setLeagues(data.leagues))
  // },[])
  // console.log(leagues)

  // useEffect(() => {
  //   // const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
  //   const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data.countrys)
  //       setLeagues(data.countrys)
  //     })
  // }, [])
  // console.log(leagues)
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
