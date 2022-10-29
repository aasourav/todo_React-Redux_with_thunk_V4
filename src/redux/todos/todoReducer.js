import { ADDED, CLEARCOMPLETED, COMPLETEALL, DELETED, EDIT, LOADED, PRIORITY, TOGGLED } from "./actionType";
import { initState } from "./initialState";

const idPicker = (todos) =>{
    const id = todos.reduce((maxId, todo) => Math.max(todo.id,maxId),-1)

    return id+1
}
const todoReducer = (state=initState,action)=>{
    switch(action.type){
        case LOADED:
            return[
                ...action.payload
            ]
        case ADDED:
            return[
                ...state,
                {
                    id: idPicker(state),
                    text: action.payload,
                    completed: false
                }
            ]
        case EDIT:
            return state.map(todo=>{
                // console.log(todo.id, action.payload.todoID)
                if(todo.id === action.payload.todoID){
                    // console.log('comes here')
                    return{
                        ...todo,
                        text: action.payload.text
                    }
                }
                
                return todo
            })
        case TOGGLED:
            return state.map(todo=>{
                if(todo.id !== action.payload){
                    return todo
                }
                else{
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                }
            })
        case PRIORITY:
            const {todoID ,todoColor} = action.payload
            return state.map((todo)=>{
                if(todo.id !== todoID){
                    return todo
                }
                else{
                    return{
                        ...todo,
                        color: todoColor
                    }
                }
            })
        case DELETED:
            return state.filter(todo => todo.id!== action.payload)

        case COMPLETEALL:
            return state.map(todo =>{
                return{
                    ...todo,
                    completed: true
                }
            })
        case CLEARCOMPLETED:
            return state.filter(todo=> todo.completed === false)
        default:
            return [...state]
    }
}

export default todoReducer