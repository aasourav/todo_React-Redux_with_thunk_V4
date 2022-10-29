import { COLORCHANGED, STATUSCHANGED } from "./actionType";
import initState from "./initState";

const filterReducer = (state=initState,action)=>{
    switch(action.type){
        case STATUSCHANGED:
            return{
                ...state,
                status: action.payload
            }
        case COLORCHANGED:
            const {col,changeType} = action.payload
            console.log(col,changeType)
            switch(changeType){
                case 'added':
                    return{
                        ...state,
                        colors:[
                            ...state.colors,
                            col
                        ]
                    }
                case 'removed':
                    return{
                        ...state,
                        colors: state.colors.filter(color => col!==color)
                    }
                default:
                    return{...state}
            }
        default:
            return{
                ...state
            }
    }
}

export default filterReducer