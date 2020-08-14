import React, { Component } from "react";
import TodoForm from "../todo-form/TodoForm";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.scss";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.setState({ todos: JSON.parse(localStorage.getItem("todos")) || [] });
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  handleSubmit = (val) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task: val, completed: false, id: uuidv4() },
      ],
    });
  };

  handleCheck = (id) => {
    this.setState((st) => ({
      todos: st.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleRemove = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => (todo.id !== id ? todo : null)),
    });
  };

  render() {
    return (
      <div className="TodoList">
        <div className="TodoList-title">
          <h1>To Do List</h1>
        </div>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              handleCheck={this.handleCheck}
              handleRemove={this.handleRemove}
            />
          ))}
        </ul>
        <TodoForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default TodoList;
