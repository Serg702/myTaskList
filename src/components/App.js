import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import TaskList from "./TaskList";
import { connect } from "react-redux";
import AddTask from "./AddTask";
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TASK_COMPLETE
} from "../constants/constants";

class App extends Component {
  render() {
    const { setTask, tasks, deleteTask, editTask, isTaskComplete } = this.props;
    return (
      <div className="App">
        <AddTask setTask={setTask} tasks={tasks} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          isTaskComplete={isTaskComplete}
          checkForDuplicates={this.checkForDuplicates}
        />
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  isTaskComplete: PropTypes.func
};

const mapStateToProps = state => {
  return {
    tasks: state.taskManipulator.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTask: newTask => {
      dispatch({
        type: ADD_TASK,
        payload: newTask
      });
    },
    deleteTask: task => {
      dispatch({
        type: DELETE_TASK,
        payload: task
      });
    },
    editTask: task => {
      dispatch({
        type: EDIT_TASK,
        payload: task
      });
    },
    isTaskComplete: task => {
      dispatch({
        type: TASK_COMPLETE,
        payload: task
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
