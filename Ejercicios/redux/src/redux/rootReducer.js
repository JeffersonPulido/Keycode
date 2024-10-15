import { combineReducers } from "redux";
import taskReducer from './taskManagment/reducers'
import userReducer from './userManagment/reducers'

const rootReducer = combineReducers({
    tasks: taskReducer,
    users: userReducer,
})

export default rootReducer
