import { useState } from 'react'

import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo';
import TodoContext from './context/TodoContext';

function App() {
  const [list, setList] = useState([
     {id:1,data:'todo1',finished:false},
      {id:2,data:'todo2',finished:false},
      {id:3,data:'todo3',finished:true},

  ]);

  return (
    <TodoContext.Provider value={{list,setList}}>
      <div>
        <AddTodo updateList= {(todo)=> setList([...list,{id:list.length +1,data:todo,finished:todo.finished}])}/>
        <TodoList />

       </div>
      </TodoContext.Provider>
  )
}

export default App
