import React, { Component } from "react";
import TodoForm from "../todo-form/TodoForm";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  handleSubmit = (val) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task: val, completed: false, id: uuidv4() },
      ],
    });
  };

  render() {
    return (
      <div className="TodoList">
        {this.state.todos.map((todo) => (
          <Todo todo={todo} />
        ))}
        <TodoForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default TodoList;
