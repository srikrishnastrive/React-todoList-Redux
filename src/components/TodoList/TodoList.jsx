import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import Todo from "../Todo/Todo";
import TodoContextDispatch from "../../context/TodoContextDispatch";

function TodoList (){
  const {list} = useContext(TodoContext);
  const {dispatch} = useContext(TodoContextDispatch);

    function onFinished (todo,isFinished){
      dispatch({type:'finish_todo',payload:{todo,isFinished}});
    }
    function onDeleted(todo){
      dispatch({type:'delete_todo',payload:{todo}});
    }

    function onEdit(todo,todoText){
      dispatch({type :'edit_todo',payload: {todo,todoText}});

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
