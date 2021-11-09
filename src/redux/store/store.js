import reducerLogin from "../reducer/reducer";
import {createStore} from 'redux'

const store=createStore(
    reducerLogin,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store