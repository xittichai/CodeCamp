import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import Homepage from './Homepage';
import Resume from './Resume';
import Fakebook from './Fakebook';
import App from './App';

export default class MyWeb extends Component {
    render() {
        return (
            <Switch>
                <Route path='/login' component={Login} />
                <Route exact path='/' component={Homepage} />
                <Route path='/resume' component={Resume} />
                <Route path='/fakebook' component={Fakebook} />
                <Route path='/app' component={App} />
            </Switch>
        );
    };
};