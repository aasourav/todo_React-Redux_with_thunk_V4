import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fethchTodo from "../redux/todos/thunk/fetchTodo";
import Footer from "./Footer";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector(state=> state.filters)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fethchTodo)
    },[dispatch])

    return (
    <div>
        <h1 className="text-xl mt-3 font-medium">Incomplete Tasks</h1>
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
            .filter(todo=>{
                const {status} = filters;
                switch(status){
                    case 'complete':
                        return todo.completed
                    case 'incomplete':
                        return !todo.completed
                    default:
                        return true
                }
            })
            .filter(todo=>{
                const {colors} = filters
                if(colors.length > 0){
                    return colors.includes(todo?.color)
                }
                else{
                    return true;
                }
            })
            .filter(todo=> {
                if(!todo.completed) return todo
                return false
            })
            .map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))}

            {/* completed */}
        </div>

        <Footer/>
        <h1 className="text-xl mt-8 font-medium">Completed Tasks</h1>
        <div className="mt-8 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos
        .filter(todo=> {
            if(todo.completed) return todo
            return false
        })
        .map((todo) => (
            <Todo todo={todo} key={todo.id} />
        ))}

        {/* completed */}
    </div>
    </div>
    );
}