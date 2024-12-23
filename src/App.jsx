import { useState } from 'react'

import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const [list, setList] = useState([
     {id:1,data:'todo1',finished:false},
      {id:2,data:'todo2',finished:false},
      {id:3,data:'todo3',finished:true},

  ]);

  return (
    <>
      <div>
        <AddTodo updateList= {(todo)=> setList([...list,{id:list.length +1,data:todo,finished:todo.finished}])}/>
        <TodoList list={list}/>

       </div>
    </>
  )
}

export default App
