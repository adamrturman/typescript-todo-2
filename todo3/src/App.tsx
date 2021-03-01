import React, {Component} from 'react';
import './App.css';
import ToDo from "./interfaces/ToDo"
import ToDoInputArea from "./components/ToDoInputArea";
import ToDoList from "./components/ToDoList";

interface AppState {
    list: ToDo[];
}

class App extends Component<{}, AppState> {
    state= {
        list: []
    }

    handleAddToList = (additionalToDo: string) => {
        const newToDo: ToDo = {
            text: additionalToDo,
            isCompleted: false
        };
        const listWithAddition: ToDo[] = [...this.state.list, newToDo];
        this.setState({ list: listWithAddition })
    }

    handleComplete = (index: number) => {
        const processedList = this.state.list.map((toDo: ToDo, i: number) => {
            if (i === index) {
                toDo.isCompleted = !toDo.isCompleted;
            }
            return toDo;
        });
        this.setState({ list: processedList });
    }

    handleDelete = (index: number) => {
        const listWithDeletion: ToDo[] = this.state.list.filter((toDo, i) => {
            return i !== index;
        } )
        this.setState({list: listWithDeletion});
    }

    render() {
        return (
            <div className="App">
                <h1>Typescript Todo</h1>
                <ToDoInputArea handleAddToList={this.handleAddToList}  />
                <ToDoList list={this.state.list} handleDelete={this.handleDelete} handleComplete={this.handleComplete} />
            </div>
        );;
    }
}

export default App;
