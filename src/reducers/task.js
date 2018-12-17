import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TASK_COMPLETE
} from "../constants/constants";
import uniqid from "uniqid";

//TODO: temporary object
const initialState = {
  tasks: [
    { id: uniqid(), name: "one", complete: false },
    { id: uniqid(), name: "two", complete: false }
  ]
};

export const taskManipulator = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      state = {
        ...state,
        tasks: [
          ...state.tasks,
          { id: uniqid(), name: action.payload, complete: false }
        ]
      };
      break;
    case DELETE_TASK:
      state = {
        tasks: [...state.tasks.filter(task => task.name !== action.payload)]
      };
      break;
    case EDIT_TASK:
      state = {
        tasks: state.tasks.filter(task => {
          if (task.id === action.payload.id) {
            task.name = action.payload.name;
            task.complete = false;
          }
          return state.tasks;
        })
      };
      break;
    case TASK_COMPLETE:
      state = {
        ...state,
        tasks: state.tasks.filter(task => {
          if (task.name === action.payload) {
            task.complete = true;
          }
          return state.tasks;
        })
      };
      break;
  }
  return state;
};
