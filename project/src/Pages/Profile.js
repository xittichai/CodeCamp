import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {
    state = {
        studentList:
        [
            {
                id: 1,
                name: 'a',
                age: 15
            },
            {
                id: 2,
                name: 'b',
                age: 16
            }
        ]
    }
    render() {
        const studentList = this.state.studentList;
        const id = this.props.match.params.id;
        const idx = id -1;
        return (
            <div>
                {[studentList[idx].name]}
            </div>
        );
    }
}

export default Profile;