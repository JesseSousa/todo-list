import React, { Component } from "react";
import "./Todo.scss";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false,
    };
  }

  handleClick = () => {
    this.props.handleCheck(this.props.todo.id);
  };

  handleRemove = () => {
    this.props.handleRemove(this.props.todo.id);
  };

  handleHover = () => {
    this.setState((st) => ({ isHover: !st.isHover }));
  };

  render() {
    return (
      <li
        className="Todo"
        onClick={this.handleClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
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
