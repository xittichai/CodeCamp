import React, {Component} from 'react';
import Task from './Tasks';
import _ from 'lodash';

class NewFile2 extends Component {
    constructor() {
        super();
        this.state = {
            TempToDoTask: '',
            ToDoList: [],
            counter: 0
        };
    };
    updateTempToDoTask = (event) => {
        this.setState({
            TempToDoTask: event.target.value
        })
    };
    addToDo = () => {
        this.setState({
            ToDoList: [...this.state.ToDoList, <Task id={this.state.counter} ToDoTask={this.state.TempToDoTask}/>],
            TempToDoTask: '',
            counter: this.state.counter + 1
        });
    };
    deleteToDo = () => {};
    render() {
        return (
            <div>
                <input value={this.state.TempToDoTask} type='text' onChange={this.updateTempToDoTask}/>
                <button onClick={this.addToDo}>Add</button>
                {this.state.ToDoList}
            </div>
        );
    };
};

export default NewFile2;