import { loaded } from "../actionCreator";

const fethchTodo = async(dispatch, getState)=>{
    const response = await fetch('http://localhost:3000/todos')
    const todos = await response.json();

    dispatch(loaded(todos));
}

export default fethchTodo;