import Todo from "../Todo/Todo";

function TodoList ({list,updatedList}){
   
    return(
        <div>
            {list.length > 0 && list.map((todo)=> 
            <Todo  key={todo.id} id = {todo.id} todoData={todo.data} isFinished={todo.finished}
            changeFinished = {(isFinished) => {const updatedListItem = list.map(t => {
                if (t.id === todo.id){
                    todo.finished = isFinished;
                    
                }
                return t;
            });
            updatedList(updatedListItem);
        }}
             />)}
        </div>
    );
}

export default TodoList;
