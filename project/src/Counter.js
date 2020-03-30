import React, { Component } from 'react';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    };
    count = (mode) => () => {
        if (mode === 'Increase') {
            this.setState({counter: this.state.counter + 1});
        } else if (mode === 'Reduce') {
            this.setState({counter: this.state.counter - 1});
        } else {
            this.setState({counter: 0});
        };
    };
    render() {
        return (
            <div style={{display: 'inline-block', width: '100vw', height: '100vh', lineHeight: '90vh', fontSize: '50vh', fontWeight: 'bold', color: 'grey', textAlign: 'center', backgroundColor: 'black'}}>
                <span onClick={this.count('Reduce')} title={'Reduce'} style={{cursor: 'pointer'}}>{'- '}</span>
                <span onClick={this.count('Reset')} title={'Reset'} style={{color: 'red', cursor: 'pointer'}}>{this.state.counter}</span>
                <span onClick={this.count('Increase')} title={'Increase'} style={{cursor: 'pointer'}}>{' +'}</span>
            </div>
        );
    };
};