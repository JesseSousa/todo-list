import React, { Component } from "react";
import "./Todo.scss";
import { isTouchDevice } from "../../../helpers.js";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: isTouchDevice(),
    };
  }

  handleClick = () => {
    this.props.handleCheck(this.props.todo.id);
  };

  handleRemove = () => {
    this.props.handleRemove(this.props.todo.id);
  };

  handleMouseEnter = () => {
    this.setState({ isHover: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHover: false });
  };

  render() {
    return (
      <li
        className="Todo"
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <label>
          <input
            checked={this.props.todo.completed}
            type="checkbox"
            onChange={this.handleClick}
          />
          <i></i>
          <span>{this.props.todo.task}</span>
          {this.state.isHover && <button onClick={this.handleRemove}>–</button>}
        </label>
      </li>
    );
  }
}

export default Todo;