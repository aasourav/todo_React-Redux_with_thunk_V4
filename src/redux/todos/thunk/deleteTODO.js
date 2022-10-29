import { deleted } from "../actionCreator";

const deleteTODO = (todoId, curStatus)=>{
    return async(dispatch, getState)=>{
        await fetch(`http://localhost:3000/todos/${todoId}`,{
            method: "DELETE",
        })
        dispatch(deleted(todoId));
    }
    
}
export default deleteTODO;