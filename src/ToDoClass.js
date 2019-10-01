import React, { Component } from "react";
import todo from "./lists.json";

export default class ToDoClass extends Component {
  state = {
    lists: todo.slice(),
    text: "",
    description: ""
  };

  componentDidMount = () => {
    document.title = `${this.state.lists.length} to dos`;
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.lists !== this.state.lists) {
      document.title = `${this.state.lists.length} to dos`;
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      lists: [
        ...this.state.lists,
        { title: this.state.title, description: this.state.description }
      ]
    });
  };

  handleDelete = title => {
    this.setState({
      lists: this.state.lists.filter(note => note.title !== title)
    });
  };

  render() {
    return (
      <div>
        {this.state.lists.map(note => (
          <div
            key={note.title}
            style={{ border: "1px solid black", padding: "20px" }}
          >
            <h3> {note.title}</h3>
            <div>{note.description}</div>
            <button onClick={() => this.handleDelete(note.title)}>
              remove
            </button>
          </div>
        ))}
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" name="title" onChange={this.handleChange} />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            onChange={this.handleChange}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
