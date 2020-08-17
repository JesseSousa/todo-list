import React, { Component } from "react";
import TodoList from "./components/todo-list/TodoList";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
