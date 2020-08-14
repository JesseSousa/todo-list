import React, { Component } from "react";
import "./TodoForm.scss";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todoInput) {
      this.props.handleSubmit(this.state.todoInput);
    }
    this.setState({ todoInput: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className="TodoForm">
        <input
          value={this.state.todoInput}
          type="text"
          placeholder="New Todo"
          name="todoInput"
          onChange={this.handleChange}
          autoComplete="off"
        />
        <button onClick={this.handleSubmit}>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export default TodoForm;
