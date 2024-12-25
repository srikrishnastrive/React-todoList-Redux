import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";


const reducres = combineReducers({todo :todoReducer});
const store = createStore(reducres);

export default store;
