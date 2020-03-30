import React from 'react';
import TodoList from './Components/TodoList'
import './App.css';
import _ from 'lodash';

class MyToDo extends React.Component {
  state = {
    inputValue: '',
    todoList: []
  };

  addTodoItem = () => {
    const newTodoObj = {
      id: _.uniqueId(),
      task: this.state.inputValue
    };
    this.setState({
      inputValue: '',
      todoList: [newTodoObj, ...this.state.todoList]
    });
  };

  deleteItemById = targetId => {
    this.setState({todoList: this.state.todoList.filter(itemEle => targetId !== itemEle.id)});
  };
  
  editItemById = targetId => {
    let temp = [...this.state.todoList];
    temp[temp.findIndex(item => item.id === targetId)].task = prompt('Please enter new text');
    this.setState({todoList: [...temp]});
  };

  onChangeInputValue = (event) => {
    this.setState({inputValue: event.target.value});
  };

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.onChangeInputValue} />
          <button onClick={this.addTodoItem} type="button">Add</button>
        </div>
        <TodoList deleteItemById={this.deleteItemById} editItemById={this.editItemById} todoList={this.state.todoList} />
      </div>
    );
  };
};

export default MyToDo;