

import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import todoReducer, { addTodo,deleteTodo,editTodo,todoFinished } from './slice/todoSlice';


function App() {
  
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo,deleteTodo,editTodo,todoFinished},dispatch);
  

  return (
      <>
        <AddTodo addTodo = {actions.addTodo}/>
        <TodoList deleteTodo = {actions.deleteTodo} editTodo = {actions.editTodo} todoFinished = {actions.todoFinished} />
     
      </>
        
     
  )
}

export default App
