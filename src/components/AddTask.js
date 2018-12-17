import React from "react";
import PropTypes from "prop-types";
class AddTask extends React.Component {
  state = {
    input: ""
  };

  changeInput = e => {
    this.setState({ input: e.target.value });
  };

  validateAndSubmit = () => {
    let duplicated = false;

    if (this.state.input) {
      this.props.tasks.forEach(task => {
        if (task.name === this.state.input) {
          duplicated = true;
        }
      });

      if (!duplicated) {
        this.props.setTask(this.state.input);
      } else {
        alert("Duplicated task !");
      }
      this.setState({ input: "" });
    } else {
      return alert("Input field is empty !");
    }
  };

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.changeInput} />
        <button type="button" onClick={this.validateAndSubmit}>
          Add Task
        </button>
      </div>
    );
  }
}

AddTask.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTask: PropTypes.func.isRequired
};

export default AddTask;
