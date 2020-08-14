import React, { Component } from "react";
import "./Todo.scss";

class Todo extends Component {
  handleClick = () => {
    this.props.handleCheck(this.props.todo.id);
  };

  handleRemove = () => {
    this.props.handleRemove(this.props.todo.id);
  };

  render() {
    return (
      <li className="Todo" onClick={this.handleClick}>
        <label>
          <input
            checked={this.props.todo.completed}
            type="checkbox"
            onChange={this.handleClick}
          />
          <i></i>
          <span>{this.props.todo.task}</span>
          <button onClick={this.handleRemove}>–</button>
        </label>
      </li>
    );
  }
}

export default Todo;
