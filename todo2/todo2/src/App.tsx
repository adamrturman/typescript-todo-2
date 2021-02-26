import React, { Component } from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput/ToDoInput'
import ToDoList from './components/ToDoList/ToDoList';


interface ToDo {
  text: string;
  isCompleted: boolean;
}

interface State {
  list: ToDo[];
}

class App extends Component {
  state: State = {
    list: []
  }

handleAddTaskToList = (taskToAdd: string) => {
  const newTaskToAdd = {
    text: taskToAdd,
    isCompleted: false
  }
  const listPlusAddedTask = [...this.state.list, newTaskToAdd]
  this.setState({ list: listPlusAddedTask })
}




  render() {
    return (
      <div className="App">
        <ToDoInput handleAddTaskToList={this.handleAddTaskToList} />
        <ToDoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
