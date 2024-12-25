
import Todo from "../Todo/Todo";
import {  useSelector } from "react-redux";

function TodoList ({deleteTodo , editTodo , todoFinished }){

    const list = useSelector((state)=> state.todo); //called state todo in the main component

    
    function onFinished (todo,isFinished){
      todoFinished(todo,isFinished);
     
    }
    function onDeleted(todo){
      deleteTodo(todo);
      
    }

    function onEdit(todo,todoText){
      editTodo(todo,todoText);

    }
   
    return(
        <div>
            {list.length > 0 && list.map((todo)=> 
            <Todo  key={todo.id} id = {todo.id} todoData={todo.data} isFinished={todo.finished}
            changeFinished = {(isFinished) => onFinished(todo,isFinished)}
            onDelete={() =>  onDeleted(todo)}
            onEdit = { (todoText) => onEdit(todo,todoText)}
          />)}
        </div>
    );
}

export default TodoList;
