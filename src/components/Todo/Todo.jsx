import { useState } from "react";

function Todo ({todoData,isFinished,changeFinished}){
    const [finish,isFinish] = useState(isFinished);
    return (
        <div>
            <input type="checkbox" checked= {finish} 
            onChange = {(e)=>{ isFinish(e.target.checked); changeFinished(e.target.checked)}}
           
            />
            {todoData}
            <button>Edit</button>
            <button>delete</button>
        </div>
    )
}

export default Todo;
