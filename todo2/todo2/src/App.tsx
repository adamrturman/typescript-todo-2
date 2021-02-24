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




  handleAddTask = (task: string) => {
    //  if the task is not blank, we will add a new toDo to the list
    if (task.length > 0) {
      //  make a new ToDo object with the string from the input
      const newToDo = {
        text: task,
        isCompleted: false
      }
      //  make a copy of the list and add the toDo
      const listWithAddition = [...this.state.list, newToDo]
      //  redefine the list in state
      this.setState({ list: listWithAddition })
      console.log("list", this.state.list)
    } else {
      alert("Blank input not allowed")
    }

  }

  render() {
    return (
      <div className="App">
        <ToDoInput handleAddTask={this.handleAddTask} />
        <ToDoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
