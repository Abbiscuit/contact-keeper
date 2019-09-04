import React from 'react';
import Navbar from './components/layout/navbar.component';
import Home from './components/pages/home.component';
import About from './components/pages/about.component';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
