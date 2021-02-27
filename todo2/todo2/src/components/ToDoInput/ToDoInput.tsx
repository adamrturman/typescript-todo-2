import React, { Component } from 'react';

interface InputProps {
    handleAddTask: (taskToAdd: string) => void;
}

interface InputState {
    taskToAdd: string;
}

export default class ToDoInput extends Component<InputProps, InputState> {
    state = {
        taskToAdd: ''
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ taskToAdd: event.target.value })
    }

    handleAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.props.handleAddTask(this.state.taskToAdd);
        this.setState({ taskToAdd: '' })
    }
    
    render() {
        return (
            <>
                <input value={this.state.taskToAdd} onChange={this.handleChange}/>
                <button onClick={this.handleAdd}>Add</button>
            </>
        )
    }
}