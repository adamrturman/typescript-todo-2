import React, { Component } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem'

interface ToDo {
    text: string;
    isCompleted: boolean;
}

interface ListProps {
    list: ToDo [];
}

export default class ToDoList extends Component<ListProps, {}> {


    render() {
       const displayedList = this.props.list.map((toDo, index) => (
            // <li key={index}>{toDo.text}</li>
            <ToDoItem key={index} toDo={toDo} index={index} />
        ))
       
     
        return (
            <>
                <h2>List</h2>
                <div>{displayedList}</div>
            </>

        )
    }
}