import {combineReducers, conbineReducers} from "redux"
import authReducer from "./auth"
import currentUserReducer from "./currentUser"

export default combineReducers({
    authReducer,
    currentUserReducer
})