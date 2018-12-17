import React from "react";
import PropTypes from "prop-types";
import EditTask from "./EditTask";
import { taskStatuses } from "../constants/taskStatuses";

class Task extends React.Component {
  state = {
    edit: false
  };

  changeValue(e) {
    this.setState({
      ...this.state,
      value: e.target.value
    });
  }

  editTaskField = () => {
    if (this.state.edit) {
      this.setState({
        ...this.state,
        edit: false
      });
    } else {
      this.setState({
        ...this.state,
        edit: true
      });
    }
  };

  render() {
    const { deleteTask, task, isTaskComplete, checkForDuplicates } = this.props;
    return (
      <div className="task">
        {!this.state.edit ? (
          <div
            className={
              !task.complete ? taskStatuses.incomplete : taskStatuses.complete
            }
            onClick={() => isTaskComplete(task.name)}
          >
            <h3>{task.name}</h3>
            <button onClick={this.editTaskField}>edit</button>
            <button onClick={() => deleteTask(task.name)}>delete</button>
          </div>
        ) : (
          <div>
            <EditTask
              editTaskField={this.editTaskField}
              task={task}
              editTask={this.props.editTask}
              checkForDuplicates={checkForDuplicates}
            />
          </div>
        )}
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  checkForDuplicates: PropTypes.func.isRequired,
  isTaskComplete: PropTypes.func.isRequired
};

export default Task;
