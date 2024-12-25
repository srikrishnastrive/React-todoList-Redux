import { ADD_TODO, DEL_TODO, FIN_TODO, UPD_TODO } from "../constants/actions";

export const todoFinished = (todo,isFinished) => ({type:FIN_TODO,payload:{todo,isFinished}});
export const deleteTodo = (todo) => ({type:DEL_TODO,payload:{todo}});
export const editTodo = (todo,todoText) => ({type :UPD_TODO,payload: {todo,todoText}});
export const addTodo = (inputValue) => ({type:ADD_TODO,payload :{todoText:inputValue}})
