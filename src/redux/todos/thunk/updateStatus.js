import { toggled } from "../actionCreator";

const updateStatus = (todoId, curStatus)=>{
    return async(dispatch, getState)=>{
        const response = await fetch(`http://localhost:3000/todos/${todoId}`,{
            method: "PATCH",
            body: JSON.stringify({
                completed: !curStatus
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const todo = await response.json();
    
        dispatch(toggled(todo.id));
    }
    
}
export default updateStatus;