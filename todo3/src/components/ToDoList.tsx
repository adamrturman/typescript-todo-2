import React, {Component} from "react";
import ToDo from "../interfaces/ToDo";
import ToDoItem from "./ToDoItem";

interface ListProps {
    list: ToDo[];
    handleDelete: (index: number) => void;
    handleComplete: (index: number) => void;
}

export default class ToDoList extends Component<ListProps, any>{

    render() {
        const displayedList = this.props.list.map((toDo: ToDo, index: number) => (
            <ToDoItem toDo={toDo} index={index} handleDelete={this.props.handleDelete} handleComplete={this.props.handleComplete} />
        ))
        return (
            <div>{displayedList}</div>
        );
    }
}