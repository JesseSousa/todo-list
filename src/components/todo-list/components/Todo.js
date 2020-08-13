import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" name="todo-check" />
        <p>{this.props.todo.task}</p>
      </div>
    );
  }
}

export default Todo;
