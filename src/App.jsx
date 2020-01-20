import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IssuesPage from './components/Routes/IssuesPage';
import Details from './components/Routes/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exactpath="/">
            <IssuesPage />
          </Route>
          <Route exactpath="/details">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
