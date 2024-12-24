import { useState } from "react";

function Todo ({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const [finish,isFinish] = useState(isFinished);
    const [isEditing,setIsEditing] = useState(false);
    const [editText,setEditText] = useState('');
    return (
        <div>
            <input type="checkbox" checked= {finish} 
            onChange = {(e)=>{ isFinish(e.target.checked); changeFinished(e.target.checked)}}
           
            />
            {(isEditing) ? <input type="text" value={editText} onChange={(e)=> setEditText(e.target.value)}/>:<span>{todoData}</span>}
            <button onClick={()=>{
                if (!isEditing){
                    setEditText(todoData);
                }
                else {
                    onEdit(editText)
                }
                setIsEditing(!isEditing);
             
            }}>{(!isEditing) ? 'Edit' : 'Save'}</button>
            <button onClick={onDelete}>delete</button>
        </div>
    )
}

export default Todo;
