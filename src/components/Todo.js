import { useState } from "react";
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import deleteTODO from "../redux/todos/thunk/deleteTODO";
import editTodoText from "../redux/todos/thunk/editTodoText";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";

export default function Todo({todo}) {
    const {text,id,completed,color} = todo

    const [Edit, setEdit] = useState(false)
    const [EditTxt , setEditTxt] = useState('')

    const dispatch = useDispatch();
    const hanldeStatusChange = (todoId)=>{
        dispatch(updateStatus(todoId,completed))
    }

    const hanldeColorChange = (todoId,color)=>{
        dispatch(updateColor(todoId,color))
    }

    const handleDeleteTodo = (todoId) =>{
        dispatch(deleteTODO(todoId))
    }
    
    const handleEditText = ()=>{
        dispatch(editTodoText(todo.id,EditTxt))
        setEdit(false)
    }
    const editChange = (e)=>{
        setEditTxt(e.target.value)
    }
    const toggleEdit = ()=>{
        setEditTxt(text)
        setEdit(true)
    }
    
    return (
        
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500 ${completed && 'border-green-500 focus-within:border-green-500'}`}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={()=> hanldeStatusChange(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && <svg
                    className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>}
            </div>
            {Edit ? 
            <div className={`select-none flex-1`} >
                <input className="p-1" value={EditTxt} onChange={editChange}/>
                <button className="border-2 rounded-md px-2 py-1 ml-2 bg-blue-600 text-white" onClick={handleEditText}>Submit</button>
            </div>
            :
            <div className={`select-none flex-1`}>
                {text}
            </div>
            }

            <div className="text-blue-600" onClick={toggleEdit}>
                <i className="fa-solid fa-pen-to-square"></i>
            </div>

            <div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
                color === "green" && 
                "border-green-500 hover:bg-green-500 bg-green-500"
            }`}
            onClick={()=> hanldeColorChange(id,'green')}
            ></div>

            <div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 
            ${
                color === "yellow" && 
                "border-yellow-500 hover:bg-yellow-500 bg-yellow-500"
            
            }`}
            onClick={()=> hanldeColorChange(id,'yellow')}
            ></div>

            <div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500
                ${
                    color === "red" && 
                    "border-red-500 hover:bg-red-500 bg-red-500"
                
                }
            `}
            onClick={()=> hanldeColorChange(id,'red')}
            ></div>

            <img
                src={cancelImage}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={()=>handleDeleteTodo(id)}
            />
        </div>
    );
}
