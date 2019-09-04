import React from 'react';
import Navbar from './components/layout/navbar.component';
import Home from './components/pages/home.component';
import About from './components/pages/about.component';
import Register from './components/auth/register.component';
import Login from './components/auth/login.component';
import Alerts from './components/layout/alerts.component';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/register" component={Register}></Route>
                  <Route exact path="/login" component={Login}></Route>
                </Switch>
              </div>
            </>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
