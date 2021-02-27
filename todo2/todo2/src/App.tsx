import React, { Component } from 'react';
import './App.css';
import ToDo from './interfaces/ToDo'
import ToDoInput from './components/ToDoInput/ToDoInput'
import ToDoList from './components/ToDoList/ToDoList';

interface ListState {
  list: ToDo[];
}

class App extends Component {
  state: ListState = {
    list: []
  }

  handleAddTask = (taskToAdd: string) => {
    const addition: ToDo = {
      text: taskToAdd,
      isCompleted: false
    }
    const listWithAddition = [addition, ...this.state.list]
    this.setState({ list: listWithAddition })
  }

  handleDelete = (index: number) => {
    //  find the index that is passed in
    //  filter the list and only show those whose index doesn't match
    const listWithDeletion = this.state.list.filter((toDo: ToDo, i: number) => i !== index)
    //  redefine the list state as that new list
    this.setState({ list: listWithDeletion })
}

  handleComplete = (index: number) => {
    //  find the toDo from the list whose index matches
    const listWithCompletions = this.state.list.map((toDo: ToDo, i: number) => {
      if (i === index) {
        toDo.isCompleted = ! toDo.isCompleted
      }
      return toDo;
    });
    this.setState({ list: listWithCompletions })
    //  change that toDo's isCompleted to true
    //  redefine the list 
  };

  render() {
    return (
      <div className="App">
        <ToDoInput handleAddTask={this.handleAddTask} />
        <ToDoList list={this.state.list} handleDelete={this.handleDelete} handleComplete={this.handleComplete}/>
      </div>
    );
  }
}

export default App;
