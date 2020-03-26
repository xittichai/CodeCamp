import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            value: 0,
            arr: [],
            text: ''
        };
    };

    plus = e => this.setState({value: this.state.value + 1});
    minus = () => this.setState({value: this.state.value - 1});
    reset = () => this.setState({value: 0});
    input = (e) => this.setState({text: e.target.value});

    addList = (e) => {
        e.preventDefault();
        this.setState({arr: [this.state.text, ...this.state.arr], text: ''});
    };

    delete = idx => () => this.setState({arr: this.state.arr.filter((item, index) => index !== idx)});

    edit = idx => () => {
        let newText = prompt('Please enter new name');
        this.setState({arr: this.state.arr.map((item, index) => index === idx? newText: item)});
    };

    render = () =>
        <div className='App'>
            {this.state.value}
            <p>
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
                <button onClick={this.reset}>Reset</button>
            </p>
            <p>
                <form>
                    What is your name:
                    <input type="text" onChange={this.input} value={this.state.text}></input>
                    <button onClick={this.addList}>add list</button>
                </form>
            </p>
            <p>
                {this.state.arr.map((item, index) => 
                    <p>Your name is {item}
                        <button onClick={this.delete(index)}>Delete</button>
                        <button onClick={this.edit(index)}>Edit</button>
                    </p>
                )}
            </p>
        </div>;
};

export default App;