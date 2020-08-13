import React, { Component } from "react";
import "./Todo.scss";

class Todo extends Component {
  handleClick = () => {
    this.props.handleCheck(this.props.todo.id);
  };

  render() {
    return (
      <li className="Todo" onClick={this.handleClick}>
        <label>
          <input
            checked={this.props.todo.completed}
            type="checkbox"
            onClick={this.handleClick}
          />
          <i></i>
          <span onClick={this.handleClick}>{this.props.todo.task}</span>
          {/* <button>–</button> */}
        </label>
      </li>
    );
  }
}

export default Todo;
