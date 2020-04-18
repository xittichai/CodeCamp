import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Login' component={Login} />
                <Redirect to='/' />
            </Switch>
        );
    };
};