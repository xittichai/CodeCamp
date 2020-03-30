import React, { Component } from 'react';


class TabExercise extends Component {
    constructor() {
        super();
        this.state = {
            tabIndex: 0,
            content: ['Content 1', 'Content 2', 'Content 3']
        };
    };
    changeTab = (index) => {
        this.setState({
            tabIndex: index
        });
    };
    render() {
        return (
            <div>
                {/* Tab */}
                <div style={{display: 'flex', cursor: 'pointer'}}>
                    <div onClick={() => {this.changeTab(0)}} style={{margin: '10px'}}>Tab 1</div>
                    <div onClick={() => {this.changeTab(1)}} style={{margin: '10px'}}>Tab 2</div>
                    <div onClick={() => {this.changeTab(2)}} style={{margin: '10px'}}>Tab 3</div>
                </div>
                {/* Content */}
                <div>
                    {this.state.content[this.state.tabIndex]}
                </div>
            </div>
        );
    };
};

export default TabExercise;