import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Map from './Pages/Map';
import Profile from './Pages/Profile';

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/map' component={Map} />
                    <Route exact path='/profile/:id' component={Profile} />
                    <Route exact path='/error' component={Home} />
                    <Redirect to='/' />
                </Switch>
            </div>
        );
    };
};

export default Router;