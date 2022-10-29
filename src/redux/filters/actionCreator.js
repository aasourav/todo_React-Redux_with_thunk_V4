import { COLORCHANGED, STATUSCHANGED } from "./actionType"

export const colorChanged = (col, changeType)=>{
    return{
        type:COLORCHANGED,
        payload:{
            col,
            changeType
        }
    }
} 

export const statusChanged = (statusChanged)=>{
    return{
        type:STATUSCHANGED,
        payload: statusChanged
    }
}