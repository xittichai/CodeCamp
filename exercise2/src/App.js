import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import LoginPage from './login/LoginPage';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route exact path='/Home' component={LoginPage} />
                <Redirect to='/' />
            </Switch>
        );
    };
};

export default Router;