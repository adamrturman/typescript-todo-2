import React, { Component } from 'react';

interface ToDoInputProps {
    handleAddTask: (task: string) => void;
}

interface ToDoInputState {
    taskToAdd: string;
}

export default class ToDoInput extends Component<ToDoInputProps, ToDoInputState> {
    state = {
        taskToAdd: ''
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ taskToAdd: event.target.value })
    }
    
    handleAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        //  run the method from props with the input from the state
        this.props.handleAddTask(this.state.taskToAdd)
        //  clear the input
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