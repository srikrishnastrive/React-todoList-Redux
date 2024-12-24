import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import Todo from "../Todo/Todo";

function TodoList ({}){
   const {list,setList} = useContext(TodoContext);
    return(
        <div>
            {list.length > 0 && list.map((todo)=> 
            <Todo  key={todo.id} id = {todo.id} todoData={todo.data} isFinished={todo.finished}
            changeFinished = {(isFinished) => {
                const updatedListItem = list.map((t) => {
                  if (t.id === todo.id) {
                    return { ...t, finished: isFinished }; // Return a new object with updated finished status
                  }
                  return t; // Return the original object for non-matching todos
                });
                setList(updatedListItem);
              }}
            onDelete={()=>{
              const updatedListItem = list.filter(t => t.id !== todo.id);
              setList(updatedListItem);
            }}
            onEdit = {(todoText) => {
              const updatedListItem = list.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, data: todoText }; // Return a new object with updated finished status
                }
                return t; // Return the original object for non-matching todos
              });
              setList(updatedListItem);
            }}
             />)}
        </div>
    );
}

export default TodoList;
