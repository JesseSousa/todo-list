import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { hoursToMilliseconds } from "../../helpers";
import TodoForm from "../todo-form/TodoForm";
import Todo from "./components/Todo";
import "./TodoList.scss";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this._updateTime = hoursToMilliseconds(12);
  }

  componentDidMount() {
    this.setState({ todos: this.getTodosFromLocalStorage() }, () =>
      this.updateTodos(this._updateTime)
    );
  }

  getTodosFromLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (!todos) {
      return [];
    }

    const newTodos = [];

    for (let todo of todos) {
      let newTodo = {};

      newTodo = { ...todo };

      if (todo.dateOfCompletion) {
        newTodo.dateOfCompletion = new Date(todo.dateOfCompletion);
      }

      newTodos.push(newTodo);
    }

    console.log(newTodos);
    return newTodos;
  };

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    this.updateTodos(this._updateTime);
  }

  updateTodos = (limitTime) => {
    if (this.includeOutdatedTodos(limitTime)) {
      this.setState({ todos: this.filterTodos(this.state.todos, limitTime) });
    }
  };

  includeOutdatedTodos = (limitTime) => {
    let includeOutdatedTodos = false;

    for (let todo of this.state.todos) {
      console.log(todo);
      if (
        todo.completed &&
        new Date().getTime() - todo.dateOfCompletion.getTime() > limitTime
      ) {
        includeOutdatedTodos = true;
        break;
      }
    }

    return includeOutdatedTodos;
  };

  filterTodos = (todos, limitTime) => {
    // const twelveHoursToMiliseconds = 43200000;
    // const twelveHoursToMiliseconds = 30000;

    return todos.filter(
      (todo) =>
        !todo.completed ||
        (todo.completed &&
          new Date().getTime() - todo.dateOfCompletion.getTime() < limitTime)
    );
  };

  handleSubmit = (val) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task: val, completed: false, id: uuidv4(), dateOfCompletion: null },
      ],
    });
  };

  handleCheck = (id) => {
    this.setState((st) => ({
      todos: st.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              dateOfCompletion: !todo.completed ? new Date() : null,
            }
          : todo
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
