import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.task}
        <button onClick={() => this.props.deleteItemById(this.props.id)}>Delete</button>
        <button onClick={() => this.props.editItemById(this.props.id)}>Edit</button>
      </div>
    );
  };
};

export default TodoItem;