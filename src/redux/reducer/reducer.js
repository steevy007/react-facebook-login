import { LOGIN, LOGOUT } from "../action/action";
const initialState={
    isLogin:false,
    user:null
}

const reducerLogin=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                isLogin:true,
                user:action.payload
            }
        case LOGOUT:
            return{
                ...state,
                isLogin:false,
                user:null
            }
        default:return state
    }
}

export default reducerLogin