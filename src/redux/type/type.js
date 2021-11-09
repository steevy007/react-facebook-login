import { LOGIN } from "../action/action";
import { LOGOUT } from "../action/action";
export const login=(user)=>{
    return{
        type:LOGIN,
        payload:{user}
    }
}

export const logout=()=>{
    return{
        type:LOGOUT
    }
}