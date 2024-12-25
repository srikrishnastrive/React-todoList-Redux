
import Todo from "../Todo/Todo";
import {  useSelector } from "react-redux";

function TodoList ({deleteTodo , editTodo , todoFinished }){

  const list = useSelector((state) => state.todo.todoList);
  console.log("Redux state:", useSelector((state) => state));

    
    function onFinished (todo,isFinished){
      todoFinished({ todo :todo, isFinished :isFinished});
     
    }
    function onDeleted(todo){
      deleteTodo({todo:todo});
      
    }

    function onEdit(todo,todoText){
      editTodo({todo:todo,todoText:todoText});

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
