import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Switch>
                  <Route exact path='/'component={Welcome} />
                  <Route path='/login' component={Login} />
                  <Route path='/signup' component={Signup} />
                  <Route path='/home' component={Home} />
              </Switch>
          </div>
      </BrowserRouter>
  );

}

export default App;
