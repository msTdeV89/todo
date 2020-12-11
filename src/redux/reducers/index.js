import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import globalReducer from "./globalReducer";

const rootReducer = combineReducers({ todoReducer, globalReducer });

export default rootReducer;
