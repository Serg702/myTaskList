import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";

class TaskList extends Component {
  checkForDuplicates = newTask => {
    for (let i = 0; i < this.props.tasks.length; i++) {
      if (this.props.tasks[i].name === newTask) {
        return true;
      }
    }
  };
  render() {
    const { editTask, deleteTask, tasks, isTaskComplete } = this.props;
    return (
      <div className="task-list">
        <h1>List of Current Tasks :</h1>
        {tasks.map(task => {
          return (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              isTaskComplete={isTaskComplete}
              editTask={editTask}
              checkForDuplicates={this.checkForDuplicates}
            />
          );
        })}
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  isTaskComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired
};

export default TaskList;
