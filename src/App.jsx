import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IssuesPage from './Routes/IssuesPage';
import Details from './Routes/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IssuesPage />
          </Route>
          <Route exact path="/details/:issueid">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
