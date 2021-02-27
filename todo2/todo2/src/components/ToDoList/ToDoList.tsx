import React, { Component } from 'react';
import ToDo from '../../interfaces/ToDo'
import ToDoItem from '../ToDoItem/ToDoItem'


interface ListProps {
    list: ToDo[];
    handleDelete: (index: number) => void;
    handleComplete: (index: number) => void;
}


export default class ToDoList extends Component<ListProps, {}> {
    
    render() {
        const displayedList = this.props.list.map((toDo: ToDo, index) => (            
            <ToDoItem key={index} index={index} toDo={toDo} handleDelete={this.props.handleDelete} handleComplete={this.props.handleComplete} />
        ))
        return (
            <>
                <h2>List</h2>
                <div>{displayedList}</div>
            </>

        )
    }
}