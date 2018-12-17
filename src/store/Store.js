import { createStore, combineReducers } from "redux";
import { taskManipulator } from "../reducers/task";

export const store = createStore(combineReducers({ taskManipulator }));
