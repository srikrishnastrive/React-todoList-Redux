import Todo from "../Todo/Todo";

function TodoList ({list}){
   
    return(
        <div>
            {list.length > 0 && list.map((todo)=> 
            <Todo  key={todo.id} id = {todo.id} todoData={todo.data} isFinished={todo.finished} />)}
        </div>
    );
}

export default TodoList;
