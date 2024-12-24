import { useContext, useState } from "react"
import TodoContextDispatch from "../../context/TodoContextDispatch";

function AddTodo({updateList}){
    const [inputValue,setInputValue] = useState('');
    const {dispatch} = useContext(TodoContextDispatch);

    return (
        <>
            <div>
                <input type="text" placeholder="add todo data" value={inputValue} 
                onChange={e => setInputValue(e.target.value)} />
                <button 
                onClick={()=>{
                    dispatch({type:'add_todo',payload :{todoText:inputValue}})
                    setInputValue('')

                }}>Add Todo</button>
            </div>
        </>
    )
}

export default AddTodo;
