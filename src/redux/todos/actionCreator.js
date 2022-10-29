import { ADDED, CLEARCOMPLETED, COMPLETEALL, DELETED, EDIT, LOADED, PRIORITY, TOGGLED } from "./actionType"

export const loaded = (todos)=>{
    return{
        type: LOADED,
        payload:todos
    }
}
export const added = (todoText)=>{
    return{
        type:ADDED,
        payload:todoText
    }
}
export const edit = (todoID,text)=>{
    return{
        type:EDIT,
        payload:{
            todoID,
            text
        }
    }
}
export const toggled = (todoID)=>{
    return{
        type:TOGGLED,
        payload:todoID
    }
}

export const priority = (todoID,todoColor)=>{
    return{
        type:PRIORITY,
        payload:{
            todoID ,
            todoColor,
        }
    }
}

export const deleted = (todoID)=>{
    return {
        type:DELETED,
        payload:todoID
    }
}

export const completeAll = ()=>{
    return{
        type:COMPLETEALL
    }
}

export const clearCompleted = ()=>{
    return{
        type:CLEARCOMPLETED
    }
}