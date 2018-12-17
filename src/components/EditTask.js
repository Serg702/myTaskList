import React from "react";
import PropTypes from "prop-types";

class EditTask extends React.Component {
  state = {
    input: this.props.task.name
  };

  changeInput = e => {
    this.setState({ input: e.target.value });
  };

  validateAndSubmit = () => {
    if (this.state.input) {
      if (this.props.checkForDuplicates(this.state.input)) {
        return alert("Enter unique name or click 'Cancel' !");
      } else {
        this.props.editTask({
          id: this.props.task.id,
          name: this.state.input
        });
        this.props.editTaskField();
        this.setState({ input: "" });
      }
    } else {
      return alert("Input field is empty !");
    }
  };

  render() {
    const { editTaskField } = this.props;
    return (
      <div>
        <input value={this.state.input} onChange={this.changeInput} />
        <button type="button" onClick={this.validateAndSubmit}>
          save
        </button>
        <button type="button" onClick={editTaskField}>
          cancel
        </button>
      </div>
    );
  }
}

EditTask.propTypes = {
  task: PropTypes.object.isRequired,
  editTaskField: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  checkForDuplicates: PropTypes.func.isRequired
};

export default EditTask;
