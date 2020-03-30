import React, { Component } from 'react';

export default class TrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            color: 'red',
            text: 'Click Me!'
        };
    };
    switchColor = () => {
        let color = this.state.color;
        if (color === 'green') {
            this.setState({color: 'yellow'});
            this.setState({text: '3'});
            setTimeout(() => this.setState({text: '2'}), 1000);
            setTimeout(() => this.setState({text: '1'}), 2000);
            setTimeout(() => this.setState({color: 'red', text: 'Click Me!'}), 3000);
        } else {
            this.setState({color: 'green'});
        };
    };
    render() {
        let style = {
            display: 'inline-block',
            width: '600px',
            height: '600px',
            lineHeight: '600px',
            fontFamily: 'Helvetica',
            fontSize: '128px',
            fontWeight: 'bold',
            color: 'blue',
            backgroundColor: this.state.color,
            borderRadius: '50%',
            boxShadow: '0 0 100px 50px white'
        };
        return (
            <div style={{display: 'inline-block', width: '100vw', height: '100vh', textAlign: 'center', lineHeight: '100vh', backgroundColor: 'gray'}}>
                <div style={style} onClick={this.switchColor}>{this.state.text}</div>
            </div>
        );
    };
};