import React, { Component } from 'react';

interface ToDo {
    text: string;
    isCompleted: boolean;
}

interface Props {
    list: ToDo[];
}

export default class ToDoList extends Component<Props, {}> {




    render() {
        console.log(this.props)
        const mappedToDos = this.props.list.map((todo: ToDo, index: number) => (
            <li key={index}>{todo.text}</li>
        ))
        console.log("props", this.props)
        return (
            <>
                <h2>List</h2>
                <div>{mappedToDos}</div>
            </>

        )
    }
}