import { edit } from "../actionCreator";

const editTodoText = (todoId, text)=>{
    return async(dispatch)=>{
        const response = await fetch(`http://localhost:3000/todos/${todoId}`,{
            method: "PATCH",
            body: JSON.stringify({
                text
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const todo = await response.json();
    
        dispatch(edit(todo.id,todo.text));
    }
    
}
export default editTodoText;