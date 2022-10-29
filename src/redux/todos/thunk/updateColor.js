import { priority } from "../actionCreator";

const updateColor = (todoId, color)=>{
    return async(dispatch, getState)=>{
        const response = await fetch(`http://localhost:3000/todos/${todoId}`,{
            method: "PATCH",
            body: JSON.stringify({
                color: color
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const todo = await response.json();
    
        dispatch(priority(todo.id, todo.color));
    }
    
}
export default updateColor;