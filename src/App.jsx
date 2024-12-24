import { useReducer, useState } from 'react'

import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo';
import TodoContext from './context/TodoContext';
import todoReducer from './reducers/todoReducer';
import TodoContextDispatch from './context/TodoContextDispatch';

function App() {
  // const [list, setList] = useState([
  //    {id:1,data:'todo1',finished:false},
  //     {id:2,data:'todo2',finished:false},
  //     {id:3,data:'todo3',finished:true},

  // ]);

  const [list,dispatch] = useReducer(todoReducer,[]);

  return (
    <TodoContext.Provider value={{list}}>
      <TodoContextDispatch.Provider  value={{dispatch}}>
     
        <AddTodo />
        <TodoList />
      </TodoContextDispatch.Provider>
      
      </TodoContext.Provider>
  )
}

export default App
