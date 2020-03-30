import React, {Component} from 'react';

// const Task = (props) => {
//     return (
//         <div>
//             <h4>Task ID: {props.id}</h4>
//             <p>{props.message}</p>
//         </div>
//     );
// };

class Task extends React.Component {
    render() {
        return (
            <div id = {this.props.id}>
                {this.props.ToDoTask}
                <button id = {this.props.id} onClick = {() => this.deleteToDo(this.props.id)}>Delete</button>
            </div>
        );
    };
};

export default Task;