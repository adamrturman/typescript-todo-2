import React, { Component } from 'react';
import ToDo from '../../interfaces/ToDo';
import styles from './ToDoItem.module.css'

interface ItemProps {
    index: number;
    toDo: ToDo;
    handleDelete: (index: number) => void;
    handleComplete: (index: number) => void;
}

export default class ToDoItem extends Component<ItemProps, {}> {

    
    

    render() {

        const toDoItemClasses = this.props.toDo.isCompleted ? `${styles.complete}` : `${styles.incomplete}`

        return (
            <li className={toDoItemClasses}>
                <span >{this.props.toDo.text}</span>
                <button onClick={()=> this.props.handleDelete(this.props.index)}>Delete</button>
                <button onClick={()=> this.props.handleComplete(this.props.index)}>{this.props.toDo.isCompleted ? 'Unmark' : 'Mark'}</button>
            </li>

        )
    }
}