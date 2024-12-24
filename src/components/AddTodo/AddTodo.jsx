import { useState } from "react"

function AddTodo({updateList}){
    const [inputValue,setInputValue] = useState('');

    return (
        <>
            <div>
                <input type="text" placeholder="add todo data" value={inputValue} 
                onChange={e => setInputValue(e.target.value)} />
                <button onClick={()=>{updateList(inputValue);setInputValue('')}}>Add Todo</button>
            </div>
        </>
    )
}

export default AddTodo;
