import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.todoInput);
    this.setState({ todoInput: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          value={this.state.todoInput}
          type="text"
          placeholder="New Todo"
          name="todoInput"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
