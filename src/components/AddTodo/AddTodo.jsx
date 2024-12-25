import {  useState } from "react";




function AddTodo({addTodo}){
    const [inputValue,setInputValue] = useState('');

    return (
        <>
            <div>
                <input type="text" placeholder="add todo data" value={inputValue} 
                onChange={e => setInputValue(e.target.value)} />
                <button 
                onClick={()=>{
                    addTodo(inputValue);
                    setInputValue('')

                }}>Add Todo</button>
            </div>
        </>
    )
}

export default AddTodo;
