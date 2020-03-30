import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todoList.map(item => <TodoItem deleteItemById={this.props.deleteItemById} editItemById={this.props.editItemById} task={item.task} id={item.id} />)}
      </div>
    );
  };
};

export default TodoList;