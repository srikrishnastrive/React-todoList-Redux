import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import Todo from "../Todo/Todo";

function TodoList (){
  const {list,setList} = useContext(TodoContext);

    function onFinished (todo,isFinished){
      const updatedListItem = list.map((t) => {
        if (t.id === todo.id) {
          return { ...t, finished: isFinished }; // Return a new object with updated finished status
        }
        return t; // Return the original object for non-matching todos
      });
      setList(updatedListItem);
    }
    function onDeleted(todo){
      const updatedListItem = list.filter(t => t.id !== todo.id);
      setList(updatedListItem);
    }

    function onEdit(todo,todoText){
      const updatedListItem = list.map((t) => {
        if (t.id === todo.id) {
          return { ...t, data: todoText }; // Return a new object with updated finished status
        }
        return t; // Return the original object for non-matching todos
      });
      setList(updatedListItem);
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
