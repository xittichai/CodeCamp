import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Fakebook extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
            </div>
        );
    };
};