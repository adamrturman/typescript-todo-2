import React, { Component } from 'react';
import ToDo from '../../interfaces/ToDo';

interface ItemProps {
    index: number;
    toDo: ToDo;
    handleDelete: (index: number) => void;
}

export default class ToDoItem extends Component<ItemProps, {}> {


    render() {
        return (
            <li>
                <span>{this.props.toDo.text}</span>
                <button onClick={()=> this.props.handleDelete(this.props.index)}>Delete</button>
                <button>Mark</button>
            </li>

        )
    }
}