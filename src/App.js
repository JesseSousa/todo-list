import React, { Component } from "react";
import TodoList from "./components/todo-list/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
