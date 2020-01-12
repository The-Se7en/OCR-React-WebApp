import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

const App = location => {
    return (
        <div className="App">
            <Header />
            <Switch key={location.key}>
                <Route exact path="/" component={Welcome} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Home} />
            </Switch>
        </div>
    );
};

export default withRouter(App);
