import React, {Component} from "react";
import ToDo from "../interfaces/ToDo";
import styles from "../styles/ToDo.module.css"

interface ItemProps {
    toDo: ToDo;
    index: number;
    handleDelete: (index: number) => void;
    handleComplete: (index: number) => void;
}

export default class ToDoItem extends Component<ItemProps, any>{

    deleteItem = () => {
        this.props.handleDelete(this.props.index);
    }

    toggleComplete = () => {
        this.props.handleComplete(this.props.index);
    }


    render() {

        const itemClasses = this.props.toDo.isCompleted ? `${styles.completed}` : ``

        return (
            <li className={itemClasses}>
                <span>{this.props.toDo.text}</span>
                <button onClick={this.deleteItem} >Delete</button>
                <button onClick={this.toggleComplete}>{this.props.toDo.isCompleted ? 'Unmark' : 'Mark'}</button>
            </li>
        );
    }
}