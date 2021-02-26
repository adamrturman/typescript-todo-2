import React, { Component } from 'react';

interface InputProps {
    handleAddTaskToList: (taskToAdd: string) => void;
}


export default class ToDoInput extends Component<InputProps, {}> {
    state = {
        taskToAdd: ''
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ taskToAdd: event.target.value })
        console.log("taskToAdd", this.state.taskToAdd)
    }

    handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.props.handleAddTaskToList(this.state.taskToAdd)
        this.setState({ taskToAdd: '' })
    }
    
    
    render() {
        return (
            <>
                <input value={this.state.taskToAdd} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>Click</button>
            </>
        )
    }
}