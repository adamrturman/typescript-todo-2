import React, { Component } from 'react';

interface ToDo {
    text: string;
    isCompleted: boolean;
}

interface ToDoItemProps {
    toDo: ToDo;
    index: number;
}

export default class ToDoItem extends Component<ToDoItemProps, {}> {

    render() {
        return (
            <li>
                <span>{this.props.toDo.text}</span>
                <button>Mark Done</button>
            </li>

        )
    }
}