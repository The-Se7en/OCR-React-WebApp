import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";

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
