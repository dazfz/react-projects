import React, { Component } from "react";

// class extends Component
class ClassInput extends Component {
  // constructor
  constructor(props) {
    // super
    super(props);

    // state
    this.state = {
      todos: [],
      inputVal: "",
    };

    // use bind
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete = (index) => {
    // Create a copy of the todos array without the task to be deleted
    const updatedTodos = this.state.todos.filter((_, i) => i !== index);

    // Update the state with the new array of todos
    this.setState({ todos: updatedTodos });
  };

  handleEdit = (index) => {
    this.setState({ editingIndex: index });
  };

  handleResubmit = (index, newValue) => {
    const updatedTodos = this.state.todos.map((todo, i) =>
      i === index ? newValue : todo
    );
    this.setState({ todos: updatedTodos, editingIndex: null });
  };

  render() {
    const { todos, editingIndex } = this.state;
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>Total Todos: {todos.length}</p>
        <h4>Tasks:</h4>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={todo}
                    onChange={(e) => {
                      const updatedTodos = todos.map((t, i) =>
                        i === index ? e.target.value : t
                      );
                      this.setState({ todos: updatedTodos });
                    }}
                  />
                  <button onClick={() => this.handleResubmit(index, todo)}>
                    Resubmit
                  </button>
                </>
              ) : (
                <>
                  {todo}
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
