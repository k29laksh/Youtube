import {combineReducers, conbineReducers} from "redux"
import authReducer from "./auth"
import currentUserReducer from "./currentUser"
import channelReducers from "./channel"
import videoReducer from "./video"
import likedVideoReducer from "./likedVideo"
export default combineReducers({
    authReducer,
    currentUserReducer,
    channelReducers,
    videoReducer,
    likedVideoReducer,


})