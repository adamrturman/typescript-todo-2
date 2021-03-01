import React, {Component} from "react";

interface InputAreaProps {
    handleAddToList: (additionalToDo: string) => void;
}

interface InputAreaState {
    toDoToAdd: string;
}

export default class ToDoInputArea extends Component<InputAreaProps, InputAreaState> {
    state = {
        toDoToAdd: ''
    }

    handleChange = (event: any) => {
        this.setState({toDoToAdd: event.target.value});
    }

    handleCreateAddition = (event: any) => {
        this.props.handleAddToList(this.state.toDoToAdd);
        this.setState({toDoToAdd: ''});
    }

    render() {
        return (
            <>
                <input value={this.state.toDoToAdd} onChange={this.handleChange}/>
                <button onClick={this.handleCreateAddition}>Add</button>
            </>
        );
    }
}